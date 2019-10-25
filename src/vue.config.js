module.exports = {
  configureWebpack: {
    resove: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': resolve('@/views'),
        //'utils': resolve('src/utils'),
        //'api': resolve('src/api'),
        // '@': resolve('src'),

      }
    }
  }
}
