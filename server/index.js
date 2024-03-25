const ws = require('ws');
const server = new ws.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('New userConnected');

  socket.on('message', (message) => {
    const b = Buffer.from(message);
    console.log(`Received: ${b.toString()}`);
    socket.send(`Echo: ${message}`);
  });
});
