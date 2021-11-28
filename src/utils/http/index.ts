import Axios from 'axios'
import { apiBaseUrl, requestTimeout } from '@/settings/index'
// import { storage } from '@/utils/storage'

const instance = Axios.create({
  baseURL: apiBaseUrl as string,
  timeout: requestTimeout,
})

instance.interceptors.request.use(
  config => {
    // 按照业务需求填写，比如：

    //   // 请求加上token
    //   if (storage.get('token')) {
    //     // jwt token
    //     config.headers.Authorization = 'Bearer ' + storage.get('token')
    //   }
    return config
  },
  err => {
    // 错误处理
    console.error(err)
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  response => {
    // 按照业务需求填写，比如只返回响应的body，不返回status code等信息
    return response.data
  },
  err => {
    // 错误处理
    console.error(err)
    return Promise.reject(err)
  }
)

export { instance as axios }
