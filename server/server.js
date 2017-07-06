'use strict'

const port = process.env.PORT || 3000

const isDev = process.env.NODE_ENV === 'development'

const express = require('express')

const bodyParser = require('body-parser')

const path = require('path')

const morgan = require('morgan')

const exphbs = require('express-handlebars')

const staticRoutes = require('./routes')

const app = express()

if (isDev) {
  const webpack = require('webpack')

  const webpackDevMiddleware = require('webpack-dev-middleware')

  const webpackHotMiddleware = require('webpack-hot-middleware')

  const webpackConfig = require('../webpack.config')

  // Use this middleware to set up hot module reloading via webpack.
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }))

  app.use(webpackHotMiddleware(compiler))
}

const handlebarsConfig = {
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, './views/layouts')
}

app.engine('handlebars',
  exphbs(handlebarsConfig)
)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, './views'))

app.set('view engine', 'handlebars')

app.use(morgan('dev'))

app.use('/static', express.static('build'))

app.use('/', staticRoutes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err,
    error: isDev ? err : {}
  })
})

app.listen(port)

module.exports = app
