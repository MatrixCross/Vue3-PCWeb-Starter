import { successData } from './utils'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/test-api/getUrl',
    method: 'get',
    response: () => {
      return successData('https://baidu.com')
    },
  },
] as MockMethod[]
