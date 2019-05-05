module.exports = {

  index: {
    filename: 'index.html',
    template: 'app/index.html',
    title: 'index',
    chunks: ['index'],
    entry: 'src/index/main.js'
  },
  mallOrder: {
    filename: 'mallOrder.html',
    template: 'app/mallOrder.html',
    title: 'mallOrder',
    chunks: ['mallOrder'],
    entry: 'src/mallOrder/main.js'
  },
}
