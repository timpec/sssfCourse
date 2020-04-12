'use strict';

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  socket.join('General');
  console.log('a user connected', socket.id);

  socket.on('disconnect', () => {
    console.log('a user disconnected', socket.id);
  });

  socket.on('join', params => {
    //console.log(params)
    socket.join(params.room)
    io.sockets.in(params.room).emit('chat message', params.chatter + " joined room: " + params.room)    
  })

  socket.on('leave', params => {
    //console.log(params)
    socket.leave(params.room)
    io.sockets.in(params.room).emit('chat message', params.chatter + " left room: " + params.room)    
  })

  socket.on('chat message', (msg) => {
    console.log('message in room: ', msg.room," =>" + msg.message );
    io.sockets.in(msg.room).emit('chat message', msg.message);
  });
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});
