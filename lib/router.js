const Router = require('koa-router')
const fs = require('fs')
const path = require('path')
const router = new Router()

module.exports = app => {
  let routerLoad = (prefix, path) => {
    let filesAdmin = fs.readdirSync(path)
    filesAdmin.forEach((file) => {
      let module = require(path + file)
      router.use(prefix, module.routes(), module.allowedMethods())
    })
  }
  // api 接口
  const apiPath = path.join(__dirname, '../server/api/')
  routerLoad('/api', apiPath)

  // admin 后端项目
  const adminPath = path.join(__dirname, '../server/admin/')
  routerLoad('/admin', adminPath)
  app.use(router.routes()).use(router.allowedMethods())

  // 处理404的状态
  app.use(async (ctx, next) =>{  
    await next;
    if(parseInt(ctx.status) === 404){
      ctx.body = '404'
    }
  })
}