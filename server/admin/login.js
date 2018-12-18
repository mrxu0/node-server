const Router = require('koa-router')
var  router  = new Router()

router.get('/', async ctx => {
    ctx.render('./views/index', {name: 'MrXu', age: 18})
})

module.exports = router