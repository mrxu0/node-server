const render = require('koa-ejs');
const path = require('path');

module.exports = app => {
  render(app, {
    root: path.join(__dirname, '../views'),
    layout: 'template',
    viewExt: 'html',
    cache: process.env.NODE_ENV !== 'development',
    debug: false
  });
}