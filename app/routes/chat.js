const { body, validationResult } = require('express-validator')

module.exports = application => {
  application.get('/chat', (req, res) => {
    application.app.controllers.chat.iniciaChat(application, req, res)
  })
  application.post('/chat', [
    body('Apelido').notEmpty().withMessage('nome ou apelido é obrigatório'),
    body('Apelido').isLength({ min: 3, max: 15 })
      .withMessage('nome ou apelido deve conter entre 3 e 15 caracteres')
  ], (req, res) => {
    const erros = validationResult(req)
    application.app.controllers.chat.iniciaChat(application, erros, req, res)
  })
}
