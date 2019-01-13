const Router = require('koa-router')
const  router  = new Router()
const CommonController = require('../../controller/common/CommonController')
const koaBody = require('koa-body')
router.post('/upload', koaBody({ jsonLimit: '2mb', multipart: true }), CommonController.upload)

module.exports = router