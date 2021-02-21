// importar o modulo do framework express
const express = require('express')

// importar o modulo do consign
const consign = require('consign')

// importar o modulo do body-parser
const bodyParser = require('body-parser')

// importar o modulo do express-validator
// const expressValidator = require('express-validator') => metodo depreciado

// iniciar o objeto express
const app = express()

// setar as variaveis 'view.engine' e 'views' do express
app.set('view engine', 'ejs')
app.set('views', './app/views')

// configurar o middleware express.static
app.use(express.static('./app/public'))

// configurar o middleware validator
// app.use(expressValidator()) => metodo depreciado

// configurar o middleware body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// configurar o consign para fazer o auto-load da rotas, dos models e dos controles para o objeto app
consign()
  .include('/app/routes')
  .then('/app/models')
  .then('/app/controllers')
  .into(app)

// exportar o objeto app
module.exports = app
