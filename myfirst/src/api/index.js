import { initAxios } from "./config"

export function getIndex(url) {
  return initAxios().then(axios => {
    return axios.get(url)
                .then(res => Promise.resolve(res.data))
  })
}
