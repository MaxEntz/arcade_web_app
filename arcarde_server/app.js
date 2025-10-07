var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, '../arcarde_client/build')));

console.log("Server started on port 4141");

SOCKET_LIST = {};

var io = require('socket.io')(server);
io.sockets.on('connection', function(socket){
    console.log('new user!');
    var socketId = Math.random();
    SOCKET_LIST[socketId] = socket;
    
    socket.on('sendMsgToServer', function(data){
        console.log('someone sent a message!');
        for(var i in SOCKET_LIST){
            SOCKET_LIST[i].emit('addToChat', data);
        }
    });
    
    socket.on('disconnect', function(){
        delete SOCKET_LIST[socketId];
    });
});

server.listen(4141);
