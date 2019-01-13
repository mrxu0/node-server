class LoginController {
    constructor() {

    }
    async login(ctx) {
        ctx.res.setHeader("Access-Control-Allow-Origin", "*"); 
        let obj = {
            title: '666666666'
        }
        ctx.body = obj;
    }
}

module.exports = new LoginController()