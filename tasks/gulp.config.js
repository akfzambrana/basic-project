module.exports = {
  sourceDir: './assets',
  buildDir: './dist',
  htmlDestDir: '/',
  resourcesDestDir: '/',
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
