
import { apiBaseUrl, requestTimeout } from '@/settings/index'

// axios请求库
import Axios from 'axios'
// import { storage } from '@/utils/storage'

// alova请求库
import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import VueHook from 'alova/vue';

// axios请求实例
const axiosInstance = Axios.create({
  baseURL: apiBaseUrl as string,
  timeout: requestTimeout,
})

axiosInstance.interceptors.request.use(
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

axiosInstance.interceptors.response.use(
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

// alova请求实例
const alovaInstance = createAlova({
  // 假设我们需要与这个域名的服务器交互
  baseURL: apiBaseUrl,

  // 在vue项目下引入VueHook，它可以帮我们用vue的ref函数创建请求相关的，可以被alova管理的状态
  statesHook: VueHook,

  // 请求适配器，这里我们使用fetch请求适配器
  requestAdapter: GlobalFetch(),

  // 设置全局的请求拦截器，与axios相似
  // beforeRequest(config) {
  //   // 假设我们需要添加token到请求头
  //     if (storage.get('token')) {
  //       config.config.headers.Authorization = 'Bearer ' + storage.get('token')
  //     }
  // },

  // 响应拦截器，也与axios类似
  async responsed(response) {
      const json = await response.json();
      if (json.code !== 200) {
        // 这边抛出错误时，将会进入请求失败拦截器内
        throw new Error(json.message);
      }
      return json.data;
    },
});

export { axiosInstance as axios, alovaInstance as useRequest }
