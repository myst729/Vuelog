// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')

rm('-rf', config.build.docsRoot)
cp('-f', 'userdata/database-docs.js', path.join(config.build.assetsRoot, config.build.userdataSubDirectory, 'database.js'))
mv('-f', config.build.assetsRoot, config.build.docsRoot)
