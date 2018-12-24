const path = require('path')
const fs = require('fs')
class CommonController {
  constructor() {}
  async upload(ctx) {
    const data = ctx.request.files.file;
    const savePath = path.join(__dirname, '../../public/upload', data.name)
    const reader = fs.createReadStream(data.path)
    const writer = fs.createWriteStream(savePath)

    const pro = new Promise( (resolve, reject) => {
      try {
        var stream = reader.pipe(writer);
        stream.on('finish', function () {
            resolve(`http://当前服务器地址${data.name}`);
        });
      } catch (error) {
        console.log('error', error)
        reject(error)
      }
    })
    
    ctx.body =  await pro
  }
}

module.exports = new CommonController