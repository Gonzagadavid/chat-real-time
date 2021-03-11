module.exports.iniciaChat = (application, erros, req, res) => {
  const dadosForm = req.body
  if (!erros.isEmpty()) {
    res.render('index', { validacao: erros.errors })
    return
  }
  application.get('io').emit('msgParaCliente', {
    apelido: dadosForm.Apelido,
    mensagem: 'acabou de entrar no chat'
  })

  res.render('chat', { dadosForm })
}
