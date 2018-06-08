module.exports = {
  sourceDir: './src',
  buildDir: './build',

  assets: [
    'images',
    'fonts'
  ],

  stylesFiles: [
    './src/**/*.scss'
  ],

  server: {
    baseUrl: './build',
    port: 3000
  },

  browsersSupport: [
    'last 2 versions',
    '> 5%',
    'ie >= 10'
  ]
};
