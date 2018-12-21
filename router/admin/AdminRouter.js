const Router = require('koa-router')
const  router  = new Router()
const LoginController = require('../../controller/admin/LoginController')

router.get('/', LoginController.login)

module.exports = router