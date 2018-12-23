class LoginController {
    constructor() {

    }

    async login(ctx) {
        let obj = {
            title: 'hello world'
        }
        await ctx.render('index', obj)
    }
}

module.exports = new LoginController