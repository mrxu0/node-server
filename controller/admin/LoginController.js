class LoginController {
    constructor() {

    }

    async login(ctx) {
        await ctx.render('index')
    }
}

module.exports = new LoginController