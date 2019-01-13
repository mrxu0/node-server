const koa = require('koa')
const router = require('./middleware/Router')
// const render = require('./middleware/Render')
// const static = require('./middleware/Static')
const logger = require('./middleware/Log')
const app = new koa()

//打印请求日志
logger(app)

// 静态资源中间件
// static(app)

// 渲染页面中间件
// render(app)

// 加载路由中间件
router(app)

app.listen(process.env.port || 8088)

console.log("启动服务成功")