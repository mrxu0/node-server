const path = require('path')
const fs = require('fs')
const dateFormat = require('dateformat')
class CommonController {
  constructor() {}
  async upload(ctx) {
    let date = dateFormat(new Date(), 'yyyy-mm')
    console.log('date', date);
    const data = ctx.request.files.file;
    const savePath = path.join(__dirname, `../../public/upload/${date}`, data.name)
    const reader = fs.createReadStream(data.path)
    const writer = fs.createWriteStream(savePath)

    const pro = new Promise( (resolve, reject) => {
      try {
        var stream = reader.pipe(writer);
        stream.on('finish', function () {
            resolve(`public/upload/${data.name}`);
        });
      } catch (error) {
        console.log('error', error)
        reject(error)
      }
    })
    
    let url = await pro
    ctx.body =  {
      success: 1,
      data: {
        url: url
      }
    }
  }
}

module.exports = new CommonController()