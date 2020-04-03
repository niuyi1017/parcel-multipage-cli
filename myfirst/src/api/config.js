export function initAxios(moduleName = "axios") {
  return import('axios').then(axios => {
    // 对axios进行配置操作

    return Promise.resolve(axios)
  })
}