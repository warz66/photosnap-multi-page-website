//const path = require('path')

//module.exports = {
  /*chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.css$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
  },*/
  /*publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',*/
    //publicPath: '/photosnap-multi-page-website/'
    /*chainWebpack: config => {
      const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
      types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    },  */
  /*chainWebpack: config => {
    config.module
    .rule('images')
    .test(/\.(png|jpeg|jpg|gif|webp)(\?.*)?$/)
    .use('url-loader')
    .loader('file-loader') // not url-loader but file-loader !
    .tap(options => { // not .option() but .tap(options...)
      // modify the options...
      //options.name = 'img/[name].[ext]'
      //options.publicPath = 'assets'
      return options
    })
      //.end()
  },*/
  /*configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  }*/
//}

/*const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  transformAssetUrls: {
    img: 'src'
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
}*/

/*function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, '../src/assets/styles/style.styl'),
      ],
    })
}*/