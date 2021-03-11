// importar as configurações do servidor
const app = require('./config/server')

// parametrizar a porta de escuta
const server = app.listen(80, _ => console.log('Servidor Online'))

// criar um gancho para que o na porta 80 tantos requisições http quanto requisições websockets
// sejam recebidas e também interpretadas
const io = require('socket.io')(server)
app.set('io', io)

// criar conexão por websocket
io.on('connection', socket => {
  // console.log('usuario conectou')
  socket.on('disconnect', dados => {
    // console.log('usuario desconectou')
  })
  // dialogo
  socket.on('msgParaServidor', data => {
    socket.emit('msgParaCliente', {
      apelido: data.apelido,
      mensagem: data.mensagem
    })
    socket.broadcast.emit('msgParaCliente', {
      apelido: data.apelido,
      mensagem: data.mensagem
    })
    if (parseInt(data.apelido_atualizado) === 0) {
      // participantes
      socket.emit('participantesParaCliente', { apelido: data.apelido })
      socket.broadcast.emit('participantesParaCliente', { apelido: data.apelido })
    }
  })
})
