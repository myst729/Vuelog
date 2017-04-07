// https://github.com/shelljs/shelljs
require('shelljs/global')
require('./check-versions')()
process.env.NODE_ENV = 'production'

var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

console.log(chalk.yellow(
  '  Tip: built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
))

var spinner = ora('building for production...')
spinner.start()

rm('-rf', config.build.assetsRoot)

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
mkdir('-p', assetsPath)
cp('-r', 'static/*', assetsPath)

var userdataPath = path.join(config.build.assetsRoot, config.build.userdataSubDirectory)
mkdir('-p', userdataPath)
cp('-r', 'userdata/*', userdataPath)
mv('-f', path.join(userdataPath, 'database-dist.js'), path.join(userdataPath, 'database.js'))
rm('-f', path.join(userdataPath, 'database-docs.js'))

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  console.log(chalk.cyan('  Build complete.\n'))
})
