class CommonController {
  constructor() {}
  upload(ctx) {
    console.log(1111)
    let obj = {
      status: 1,
      msg: 'success'
    }
    ctx.end()
  }
}

module.exports = new CommonController