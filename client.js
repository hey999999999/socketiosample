const socket = require('socket.io-client')('http://localhost:3000');
socket.on('connect', () => {
  console.log('yea!!');
  socket.emit('chat message', 'how are you?');
  setTimeout(() => {
    socket.disconnect();
    process.exit(0);
  }, 500);
});
