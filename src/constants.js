const { version } = require('../package.json');
const downloadDirectory = `${process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE']}/.template`

module.exports = {
    version,
    downloadDirectory
}