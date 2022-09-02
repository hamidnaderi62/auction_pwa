const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  },
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'auction_pwa',
    themeColor: '#1e88e5',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'sw.js',
      // ...other Workbox options...
    }
  }

}
