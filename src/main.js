const { program } = require('commander')
const { version } = require('./constants.js')
const path = require('path')

const mapActions = {
  create: {
    alias: 'c',
    description: 'create a parcel-multipage project',
    examples: [
      'pmp-cli create <project-name>'
    ]
  },
  '*': {
    alias: 'c',
    description: 'command not found',
    examples: []
  }
}


Reflect.ownKeys(mapActions).forEach(action => {
  program
    .command(action)
    .alias(mapActions[action].alias)
    .description(mapActions[action].description)
    .action(() => {
      if (action === '*') {
        console.log(mapActions[action].description)
      } else {
        require(path.resolve(__dirname, action))(...process.argv.slice(3))
      }

    })
})
program.on('--help', () => {
  Reflect.ownKeys(mapActions).forEach(action => {
      mapActions[action].examples.forEach(example => {
          console.log('  ' + example)
      })
  })
})
program.version(version).parse(process.argv)