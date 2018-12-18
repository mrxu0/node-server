module.exports = {
  moduleName: 'formatDate',
  moduleBody: function (input) {
    return (input.getMonth() + 1) + '/' + input.getDate() + '/' + input.getFullYear()
  }
}