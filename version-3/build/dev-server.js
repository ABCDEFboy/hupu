'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()

var News = require('../tsconfig.json')

var nbaDataNews = News.Nba.data

var chinafootNews = News.ChinaFoot.data

var internetFootNews = News.internetFoot

var cnaNews = News.CBA

var nbaGames = News.nbaGames

var cbaGames = News.cbaGames

var chinaGames = News.chinaGames

var nbaVideo = News.nbaVideo

var cbaVideo = News.cbaVideo

var internetVideo = News.internetVideo

var internetPhotos = News.internetPhotos

var nbaPhotos = News.nbaPhotos

var cbaPhotos = News.cbaPhotos

var nbaDeep = News.nbaDeep

var nbaOut = News.nbaOut

var data = News.data

var count = News.count

var apiRouter = express.Router();

app.use('/api', apiRouter)

apiRouter.get('/count', function (req, res) {
  res.json({
    error: 0,
    data: count
  })
})

apiRouter.get('/data', function (req, res) {
  res.json({
    error: 0,
    data: data
  })
})

apiRouter.get('/nbaVideo', function (req, res) {
  res.json({
    error: 0,
    data: nbaVideo
  })
})

apiRouter.get('/cbaVideo', function (req, res) {
  res.json({
    error: 0,
    data: cbaVideo
  })
})

apiRouter.get('/internetVideo', function (req, res) {
  res.json({
    error: 0,
    data: internetVideo
  })
})

apiRouter.get('/internetPhotos', function (req, res) {
  res.json({
    error: 0,
    data: internetPhotos
  })
})

apiRouter.get('/nbaPhotos', function (req, res) {
  res.json({
    error: 0,
    data: nbaPhotos
  })
})

apiRouter.get('/cbaPhotos', function (req, res) {
  res.json({
    error: 0,
    data: cbaPhotos
  })
})

apiRouter.get('/nbaDeep', function (req, res) {
  res.json({
    error: 0,
    data: nbaDeep
  })
})

apiRouter.get('/nbaOut', function (req, res) {
  res.json({
    error: 0,
    data: nbaOut
  })
})

apiRouter.get('/chinaGames', function (req, res) {
  res.json({
    error: 0,
    data: chinaGames
  })
})

apiRouter.get('/cbaGames', function (req, res) {
  res.json({
    error: 0,
    data: cbaGames
  })
})

apiRouter.get('/nbaNews', function (req, res) {
  res.json({
    error: 0,
    data: nbaDataNews
  })
})

apiRouter.get('/chinaFootNews', function (req, res) {
  res.json({
    error: 0,
    data: chinafootNews
  })
})
  apiRouter.get('/internetFootNews', function (req, res) {
    res.json({
      error: 0,
      data: internetFootNews
    })
})

apiRouter.get('/cbaNews', function (req, res) {
  res.json({
    error: 0,
    data: cnaNews
  })
})

apiRouter.get('/nbaGames', function (req, res) {
  res.json({
    error: 0,
    data: nbaGames
  })
})
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
