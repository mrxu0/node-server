const serve = require('koa-serve')
const path = require('path')

module.exports = app => {
    app.use(serve('public', path.join(__dirname, '..')))
}

