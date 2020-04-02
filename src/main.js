const program = require('commander')
console.log(process.argv)
const { version } = require('./constants.js')
program.version(version).parse(process.argv)