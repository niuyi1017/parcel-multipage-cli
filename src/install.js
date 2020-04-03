var which = require('which');
const chalk = require('chalk');

var childProcess = require('child_process');

// 开启子进程来执行npm install命令
function runCmd(cmd, args, fn) {
  args = args || [];
  console.log(111111111111111)
  var runner = childProcess.spawn(cmd, args, {
    stdio: 'inherit'
  });
  console.log(11112222211111)
  runner.on('close', function (code) {
    if (fn) {
      fn(code)
    }
  })
}

// module.exports =  runCmdPromise = async () => {
//   return new Promise((resolve, reject) => {
//     runCmd(which.sync('npm'), ['install','parcel-bundler',' -g'], function () {
//       resolve()
//     })
//   })
// }


// 查找系统中用于安装依赖包的命令
function findNpm() {
  var npms = ['npm', 'cnpm'];
  for (var i = 0; i < npms.length; i++) {
    try {
      // 查找环境变量下指定的可执行文件的第一个实例
      which.sync(npms[i]);
      console.log('use npm: ' + npms[i]);
      return npms[i]
    } catch (e) {
    }
  }
  throw new Error(chalk.red('please install npm'));
}

var npm = findNpm();
module.exports =  runCmd(which.sync(npm), ['install','parcel-bundler -g'], function () {
  console.log(npm + ' install end');
})

// module.exports =  runCmdPromise = async () => {
//     return new Promise((resolve, reject) => {
//       runCmd(which.sync('npm'), ['install','parcel-bundler',' -g'], function () {
//         resolve()
//       })
//     })
//   }