const Pug = require('koa-pug')

module.exports = (app) => {
  new Pug({ 
    helperPath: __dirname + '/renderhelper',
    noCache: true,
    app: app 
  })
}