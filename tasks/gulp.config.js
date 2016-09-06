module.exports = {
  sourceDir: './assets',
  buildDir: './dist',
  htmlDestDir: '/', // ex: '/html'
  resourcesDestDir: '/', // ex: '/public'
  localhost: {
    port: 3000
  },
  browsersSupport: [
    'last 2 versions',
    '> 5%',
    'ie >= 10'
  ],
  excludeResourcesCopy: [
    'html',
    'styles',
    'sprites'
  ]
};
