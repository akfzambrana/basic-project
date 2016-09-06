module.exports = {
  sourceDir: './assets',
  buildDir: './dist',
  htmlDestDir: '/', // ex: '/html'
  resourcesDestDir: '/', // ex: '/public'
  browsersSupport: [
    'last 2 versions',
    '> 5%',
    'ie >= 10'
  ],
  excludeResourcesCopy: [
    'html',
    'doc',
    'styles',
    'sprites'
  ]
};
