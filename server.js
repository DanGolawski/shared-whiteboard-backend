const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
   cors: {
     origin: '*',
   }
 });


const serverPort = 5000;

io.on('connection', (socket) => {

   socket.on('canvas-data', (data) => {
      socket.broadcast.emit(data[0], data);
   });

});

http.listen(serverPort, () => {
   console.log('Started on :', serverPort);
});