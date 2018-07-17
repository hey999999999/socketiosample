const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
//app.get('/', (req, res) => res.send('<h1>Hello world</h1>'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => console.log('user disconnected'));
  socket.on('chat message', (msg) => {
    console.log('receive msg: ' + msg);
    io.emit('chat message', msg);
  });
  socket.broadcast.emit('hi');
});
const PORT = process.env.PORT || 3000;
//io.on('connection', (socket) => socket.on('chat message', (msg) => console.log('message: ' + msg)));
http.listen(PORT, () => console.log('listening on *:' + PORT));