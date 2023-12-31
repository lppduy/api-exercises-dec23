const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
