const ws = require('ws');
const server = new ws.Server({ port: 8080 });

console.log('Server started at ws://localhost:8080');

server.on('connection', (socket) => {
  console.log('New connection');
  socket.on('message', (message) => {
    console.log(message);
    socket.send(`${message}`);
  });
});
