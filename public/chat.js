'use strict';

const socket = io();

let chatter = "";
let room = "General"

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.innerHTML = msg;
  document.getElementById('messages').appendChild(item);
});

document.getElementById('name').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('n');
  socket.emit('chat message', {room: room, message: inp.value + " has joined the chat!"});
  chatter = inp.value
  inp.value = '';
});

document.getElementById('rooms').addEventListener('change', (event) => {
  //event.preventDefault();
  socket.emit('leave', {room, chatter})
  room = event.target.value
  socket.emit('join', {room, chatter})
})

document.getElementById('message').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('m');
  if (chatter === "") {
    socket.emit('chat message', {room: room, message: "Anonymous chatter says: " + inp.value} );
  } else {
    socket.emit('chat message', {room: room, message: chatter + " says: " + inp.value} );
  }
  inp.value = '';
});
