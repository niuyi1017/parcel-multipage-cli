const axios = require('axios')
const ora = require('ora')
const Inquirer = require('inquirer')

const { promisify } = require('util');
const { downloadDirectory } = require('./constants');

const path = require('path')
const fs = require('fs-extra');

let ncp = require('ncp')
ncp = promisify(ncp)

let downloadGitRepo = require('download-git-repo')
downloadGitRepo = promisify(downloadGitRepo)


const waitFnloading = (fn, message) => async(...args) => {
  const spinner = ora(message)
  spinner.start()
  const result = await fn(...args)
  spinner.succeed()
  return result;
}

function selectedBranch(templateTypes,templateName) {
  for (let i = 0; i < templateTypes.length; i++){
    console.log(templateTypes[i])
    if (templateTypes[i].name == templateName)
      return templateTypes[i].branch
  }
}

let templateTypes = [
  {
    name: "parcel-multipage & Basic examples ",
    branch: 'full'
  },
  {
    name: "just parcel-multipage  ",
    branch: 'simple'
  },
]

let packageUser = {
  name: "",
  version: "1.0.0",
  description: "my first parcel multipage project",
  author: '',
  license: 'MIT',
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}

const fetchTagList = async () => {
  const { data } = await axios.get('https://api.github.com/repos/haimingyue/mmall-fe/tags');
  return data;
}



const download = async (branch) => {
  let api = `niuyi1017/parcel-practice`
  if(branch) {
      api+=`#${branch}`
  }
  const dest = `${downloadDirectory}/${branch}`
  await downloadGitRepo(api, dest)
  return dest;
}

module.exports = async (projectName) => {
  //0、 创建项目目录
  fs.ensureDirSync(projectName)

  //1. 初始化package.json
  
  const { name }  = await Inquirer.prompt({
    name: 'name',
    type: 'input',
    message: `please input project's name (${projectName})`,
  })
  packageUser.name = name ? name : projectName

  const { version }  = await Inquirer.prompt({
    name: 'version',
    type: 'input',
    message: `version: (1.0.0)`,
  })
  packageUser.version = version ? version : '1.0.0'
  
  const { description }  = await Inquirer.prompt({
    name: 'description',
    type: 'input',
    message: `description: (${packageUser.description})`,
  })
  packageUser.description = description ? description : "my first parcel multipage project "
  
  const { author }  = await Inquirer.prompt({
    name: 'author',
    type: 'input',
    message: `author:`,
  })
  packageUser.author = author ? author : ""

  const { license }  = await Inquirer.prompt({
    name: 'license',
    type: 'input',
    message: `license: `
    
  })
  packageUser.license = license ? license : ""  

  const { test }  = await Inquirer.prompt({
    name: 'test',
    type: 'input',
    message: `test command:  `
    
  })
  packageUser.scripts.test = test ? test : "echo \"Error: no test specified\" && exit 1"
  console.log('About to write to D:\projects\testInit\package.json:')
  console.log(packageUser)

  const { confirmPackage }  = await Inquirer.prompt({
    name: 'confirmPackage',
    type: 'confirm',
    message: `Is this OK? (y/N) `
  })

  

  //package.json 确认成功
  if (confirmPackage) {
    // 选择项目模板类型： 完整版 or 精简版 
    templateNames = templateTypes.map((item) => item.name)
    const { templateName } = await Inquirer.prompt({
      name: 'templateName',
      type: 'list',
      message: 'please choise a template to create project',
      choices: templateNames
    })

    const templateBranch = selectedBranch(templateTypes, templateName)

    
    // let tags = await waitFnloading(fetchTagList, 'fetching tags')(templateType)
    // const { tag } = await Inquirer.prompt({
    //     name: 'tag',
    //     type: 'list',
    //     message: 'please choise a tag',
    //     choices: tags
    // })
    // tags = tags.map(item => item.name)
    // console.log('tags', tags)

    const result = await waitFnloading(download, 'fetching template')(templateBranch)
    ncp(result, path.resolve(projectName))
    const packageObj = fs.readJsonSync(`./${projectName}/package.json`)
    packageObj.name = packageUser.name
    packageObj.version = packageUser.version
    packageObj.description = packageUser.description
    packageObj.author = packageUser.author
    packageObj.license = packageUser.license
    packageObj.scripts.test = packageUser.scripts.test
    fs.writeJsonSync('./package.json', packageObj)
    
    
  }
  
}