//antes se llamaba chat.js, cambiar rutas

const WebSocket = require('ws');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


function setupwebsocketserver(wss) {
  const wss = new WebSocket.Server({ server });
  wss.on('connection', (ws, req) => {
    console.log('someone joined the chat');

    ws.on('message', async (message) => {
      const { chatId, personaId, mensaje } = JSON.parse(message.toString());
      console.log(`we got a message for chat ${chatId} from person ${personaId}:`, mensaje);

      try {
        await prisma.mensajes.create({
          data: {
            id_chat: parseInt(chatId),
            id_persona: parseInt(personaId),
            mensaje: mensaje,
            estado: 'sent', 
          },
        });
      } catch (error) {
        console.error("Error saving message to database:", error);
      }

      wss.clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message.toString());
        }
      });
    });
    
    ws.on('close', () => {
      console.log('someone left the chat');
    });
  });

  console.log('the chat backend is ready');
}

module.exports = setupwebsocketserver;