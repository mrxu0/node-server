const Router = require('koa-router')
const fs = require('fs')
const path = require('path')
const router = new Router()

module.exports = app => {
  app.use(async (ctx, next) => {
    // 添加响应头
    ctx.res.setHeader("Access-Control-Allow-Origin", "*"); 
    await next()
  })
  let routerLoad = (prefix, path) => {
    let filesAdmin = fs.readdirSync(path)
    filesAdmin.forEach((file) => {
      let module = require(path + file)
      router.use(prefix, module.routes(), module.allowedMethods())
    })
  }
  /* // api 接口
  const apiPath = path.join(__dirname, '../server/api/')
  routerLoad('/api', apiPath)*/

  // 公共接口
  const commonPath = path.join(__dirname, '../router/common/')
  routerLoad('/common', commonPath)
  app.use(router.routes()).use(router.allowedMethods())

  // admin 后端项目
  const adminPath = path.join(__dirname, '../router/admin/')
  routerLoad('/admin', adminPath)
  app.use(router.routes()).use(router.allowedMethods())

  // 处理404的状态
  app.use(async (ctx, next) => {
    await next;
    if (parseInt(ctx.status) === 404) {
      ctx.status = 404
      ctx.body = '404'
    }
  })
}