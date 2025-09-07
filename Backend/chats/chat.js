const WebSocket = require('ws');

function setupwebsocketserver(server) {
  const wss = new WebSocket.Server({ server });

  // espera a que llegue alguien
  wss.on('connection', ws => {
    console.log('A new friend joined the chat!');

    // cuando alguien manda mensaje, pasa esto
    ws.on('message', message => {
      console.log('We got a message:', message.toString());

      // lleva el mensaje al resto
      wss.clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message.toString());
        }
      });
    });

    // cuando se desconecta la persona termina la conexion
    ws.on('close', () => {
      console.log('A friend left the chat!');
    });
  });

  console.log('The chat backend is now ready!');
}

module.exports = setupwebsocketserver;
