const Pug = require('koa-pug')

module.exports = (app) => {
  new Pug({ 
    helperPath: __dirname + '/renderhelper',
    noCache: process.env.NODE_ENV === 'development',
    app: app 
  })
}