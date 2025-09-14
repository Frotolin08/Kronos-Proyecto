import { WebSocket } from 'ws';
import jwt from 'jsonwebtoken';

function setupwebsocketserver(wss, JWT_SECRET, prisma) {
  wss.on('connection', async (ws, req) => {
    console.log('someone joined the chat');

    const token = req.headers['sec-websocket-protocol'];
    if (!token) {
      console.log('No token provided, closing connection');
      ws.close(1008, 'Authentication required');
      return;
    }
    let personaId;

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      personaId = decoded.personaId;
      ws.personaId = personaId;
    } catch (error) {
        console.log('Invalid token, closing connection', error);
        ws.close(1008, 'Invalid token');
        return;
    }

    ws.on('message', async (message) => {
        const { chatId, mensaje } = JSON.parse(message.toString());
        console.log(`we got a message for chat ${chatId} from person ${personaId}:`, mensaje);

        try {
            const hasAccess = await prisma.tiene_pc.findFirst({
                where: {
                    id_persona: personaId,
                    id_chat: parseInt(chatId, 10)
                }
            });

            if (!hasAccess) {
                console.log('User not authorized to send messages to this chat');
                ws.send(JSON.stringify({ error: 'You are not a member of this chat' }));
                return;
            }

            const mensajesguardados = await prisma.mensajes.create({
              data: {
                id_chat: parseInt(chatId, 10),
                id_persona: personaId,
                mensaje: mensaje,
                estado: 'sent', 
              },
            });

            const messageWithSender = {
                ...savedMessage,
                personaId: personaId,
            };

            wss.clients.forEach(async client => {
                if (client.readyState === WebSocket.OPEN && client.personaId) {
                    try {
                        const isMember = await prisma.tiene_pc.findFirst({
                            where: {
                                id_chat: parseInt(chatId, 10),
                                id_persona: client.personaId
                            }
                        });

                        if (isMember) {
                            client.send(JSON.stringify(messageWithSender));
                        }
                    } catch (error) {
                        console.error('Error broadcasting message:', error);
                    }
                }
            });
        } catch (error) {
            console.error("Error saving message to database or broadcasting:", error);
        }
    });

    ws.on('close', () => {
        console.log('someone left the chat');
    });

    console.log('the chat backend is ready');
  });
}

export default setupwebsocketserver;