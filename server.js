const koa = require('koa')
const router = require('./middleware/router')
const render = require('./middleware/render')
const static = require('./middleware/static')



const app = new koa()
// const serve = require('koa-serve')
// 静态资源中间件
static(app)
// app.use(serve('public'))

// 渲染页面中间件
render(app)

// 加载路由中间件
router(app)

app.listen(process.env.port || 3000)
// app.listen(3000)

console.log("启动服务成功")