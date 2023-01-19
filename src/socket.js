

module.exports = (io) =>{

    let nickNames = [];

    io.on('connection', socket =>{
        console.log('Nuevo usuario conectado');

        //Al recibir un mensaje recojemos los datos
        socket.on('enviar mensaje', (datos) =>{
            //console.log(datos);
            //Lo enviamos a todos los usuarios (clientes)
            io.sockets.emit('nuevo mensaje', {
                msg: datos,
                nick: socket.nickname
            });
        });

//nuevo usuario
        socket.on('nuevo usuario', (datos, callback) => {

            //Nos devuelve el indice si el dato existe, es decir, si ya existe el nombre de usuario:
            if(nickNames.indexOf(datos) != -1){
                callback(false);
            }else{
                //Si no existe le respondemos al cliente con true y agregamos el nuevo usuario:
                callback(true);
                socket.nickname = datos;
                nickNames.push(socket.nickname);
            }
        });
    });
}