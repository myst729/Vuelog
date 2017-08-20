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

var assetsRoot = config.build.assetsRoot
rm('-rf', assetsRoot)
mkdir('-p', assetsRoot)
echo('vuelog.js.org').to(path.join(assetsRoot, 'CNAME'))
cp('-r', 'static', path.join(assetsRoot, config.build.assetsSubDirectory))
cp('-r', 'userdata', path.join(assetsRoot, config.build.userdataSubDirectory))

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
