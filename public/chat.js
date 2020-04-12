'use strict';

const socket = io();
var chatter = "";
var vip = false;

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.innerHTML = msg;
  document.getElementById('messages').appendChild(item);
});

//if (vip === true) {
socket.on('room message', (msg) => {
  const item = document.createElement('li');
  item.innerHTML = msg;
  document.getElementById('messages').appendChild(item);
});
//}

document.getElementById('name').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('n');
  socket.emit('chat message', inp.value + " has joined the chat!");
  chatter = inp.value
  inp.value = '';
});

document.getElementById('message').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('m');

  if (inp.value == "/join private") {

    vip = true;
    console.log('a user joined private room', chatter);
    socket.emit('chat message', chatter + " joined room: private")
    socket.join('priva');

  } else if (inp.value == "/leave private") {

    vip = false;
    console.log('a user left private room', chatter);
    socket.emit('chat message', chatter + " left room: private")
    socket.leave('priva');
    
  } else {

  if (chatter === "") {
    
    if (vip === true) {
      socket.broadcast.to('priva').emit('room message', "Anonymous chatter says: " + inp.value);
    } else {
      socket.emit('chat message', "Anonymous chatter says: " + inp.value);
    }

  } else {

    if (vip === true) {
      socket.broadcast.to('priva').emit('room message', chatter + " says: " + inp.value);
    } else {
      socket.emit('chat message', chatter + " says: " + inp.value);
    }

  }
}
  inp.value = '';
});
