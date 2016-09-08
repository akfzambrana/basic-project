module.exports = {
  sourceDir: './assets',
  buildDir: './dist',
  htmlDestDir: '/', // ex: '/html'
  resourcesDestDir: '/', // ex: '/public'
  server: {
    baseUrl: './dist',
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
    'sprites',
    'js'
  ]
};
