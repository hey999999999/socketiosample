const socket = require('socket.io-client')('http://localhost:3000');
socket.on('connect', () => {
  const text = process.argv.join();
  console.log(text);
  socket.emit('chat message', text);
  setTimeout(() => {
    socket.disconnect();
    process.exit(0);
  }, 500);
});
