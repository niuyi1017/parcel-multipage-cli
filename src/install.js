var which = require('which');
const chalk = require('chalk');

var childProcess = require('child_process');

// 开启子进程来执行npm install命令
function runCmd(cmd, args, fn) {
  args = args || [];
  var runner = childProcess.spawn(cmd, args, {
    stdio: 'inherit'
  });

  runner.on('close', function (code) {
    if (fn) {
      fn(code)
    }
  })
}

function runCmdPromise() {
  return new Promise((resolve, reject) => {
    runCmd(which.sync(npm), ['install parcel-bundler -g'], function () {
      resolve()
    })
  })
}

module.exports = {
  runCmdPromise
}
