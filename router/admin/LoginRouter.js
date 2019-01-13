const Router = require('koa-router')
const  router  = new Router()
const LoginController = require('../../controller/admin/LoginController')

router.post('/login', LoginController.login)
router.get('/login', LoginController.login)

module.exports = router