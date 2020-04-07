import axios from 'axios'

export function request(config) {
  const axiosInstance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //axios请求拦截器
  axiosInstance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  //axios响应拦截器
  axiosInstance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return axiosInstance(config)
}
