const Router = require('koa-router')
var  router  = new Router()

router.get('/a', async ctx => {
    ctx.body = '商品详情444'
})

module.exports = router