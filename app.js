var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);

const PORTA = 3030

http.listen(PORTA,() => {console.log(`servirdor rodando porta ${PORTA}`)})
