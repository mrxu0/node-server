const static = require('koa-static')

module.exports = app => {
    app.use(static(__dirname, './public'))
}