module.exports = {
  sourceDir: './assets',
  buildDir: './dist',
  htmlDestDir: '/', // ex: '/html'
  resourcesDestDir: '/', // ex: '/public'
  iconsSrcSvgDir: '/svg/icons', // ex: '/svg/icons''
  iconFontDestDir: '/fonts/icons', // ex: '/fonts/icons'
  iconsTemplatePath: '/templates/_icons.scss',
  iconsPartialDestDir: '/styles', // ex: '/styles/elements/placeholders'
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
