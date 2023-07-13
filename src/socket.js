import io from "./server.js"

io.on('connection', (socket) => {
    console.log('um cliente se conectou!')

    socket.on('edit-text', (text) => {
        socket.broadcast.emit('edit-text-client', text)
    })
})