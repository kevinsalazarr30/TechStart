let socketAux;
module.exports = {
    start: function (io) {
        io.on('connection', function (socket) {
            console.log('Un cliente se ha conectado');
            socketAux = socket;
        });
    },
    emitLoader: function () {
        console.log('emitiendo message...')
        socketAux.emit('load', 'load');
    }
};