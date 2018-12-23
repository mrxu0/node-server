const Router = require('koa-router')
const  router  = new Router()
const CommonController = require('../../controller/common/CommonController')

router.post('/upload', CommonController.upload)

module.exports = router