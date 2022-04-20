const SocketIO = require('socket.io');

module.exports = (server) => {
    
    const io = SocketIO(server, {path : '/socket.io'});

    io.on('connection',  socket => {
        socket.on('user', data =>{
            console.log(data);
        }),

        socket.emit('ok', 'ok')
    })

    io.on('discconection', socket => {
        socket.on('disconnect socket server')
    })
}