//Archivo que configura la aplicación

const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const socketio = require("socket.io")(server);


app.set('port', process.env.PORT || 3000);
const servidor = "172.20.10.2"

//ejecutamos la funcion de socket.js
require('./socket')(socketio);


//Archivos estaticos:
app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto',servidor, app.get('port'));
})

