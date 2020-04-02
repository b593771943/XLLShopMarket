const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/base.less')
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components-less': 'assets/css/components',
        'imgs': 'assets/imgs',
        'pages': '@/pages',
        'components': '@/components'
      }
    }
  }
}
