/**
 * 这个是从别人的项目直接拷贝过来的。
 * 项目来源：https://github.com/johndatserakis/koa-vue-notes-api
 */
const log4js = require('log4js')
const error =  require('koa-json-error')
log4js.configure({
    appenders: {
        file: {
            type: 'file',
            filename: 'logs/main.log',
            maxLogSize: 20480,
            backups: 10,
        },
        console: {
            type: 'stdout',
        },
    },
    categories: {
        development: {
            appenders: ['file', 'console'],
            level: 'all',
        },
        production: {
            appenders: ['file'],
            level: 'info',
        },
        default: {
            appenders: ['file'],
            level: 'info',
        },
    },
})
const logger =
    process.env.NODE_ENV === 'development'
        ? log4js.getLogger('development')
        : log4js.getLogger('production')
module.exports = app => {
    app.use(async (ctx, next) => {
        try {
            await next()
            logger.info(
                ctx.method + ' ' + ctx.url + ' RESPONSE: ' + ctx.response.status
            )
        } catch (error) { }
    })

    //Apply error json handling
    let errorOptions = {
        postFormat: (e, obj) => {
            //Here's where we'll stick our error logger.
            logger.info(obj)
            if (process.env.NODE_ENV !== 'production') {
                return obj
            } else {
                delete obj.stack
                delete obj.name
                return obj
            }
        },
    }
    app.use(error(errorOptions))
}