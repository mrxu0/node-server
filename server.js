const koa = require('koa')
const router = require('./lib/router')
const render = require('./lib/render')
const static = require('koa-static')


const app = new koa()
app.use(static(__dirname, './public'))

render(app)
router(app)

app.listen(3000)