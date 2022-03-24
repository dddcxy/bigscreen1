import axios from 'axios'

// 创建一个axios实例
const service = axios.create({
  // 请求超时配置
  timeout: 3000
})
// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default service
