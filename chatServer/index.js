const express = require("express");
const app = express();
const http = require('http');
const {Server} = require("socket.io");
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST'],
    },
});

io.on('connection', (socket) => { 
    
    // socket object may be used to send specific messages to the new connected client
    console.log('new client connected '+socket.id);

    socket.on('send_msg',(data)=>{
        console.log(Object.values(data)+' ---> got the msg');
        socket.broadcast.emit('recv_all_msg',data);
        console.log('Broadcast is done');
    });
});

server.listen(3001,()=>{
    console.log('Server is activated.');
})