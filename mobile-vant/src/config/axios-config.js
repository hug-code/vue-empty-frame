import axios from 'axios'
import {Toast} from 'vant'

const service = axios.create({
  baseURL: '',
  timeout: 10000,
})

service.interceptors.request.use((config) => {
  config.headers.token = '123123'
  return config
}, (error) => Promise.reject(error))

service.interceptors.response.use((response) => {
  const res = response.data
  if (res.code !== 200) {
    Toast.fail(res.msg || '接口请求异常');
  }
  return Promise.resolve(res)
}, (error) => {
  console.log(error)
  return {
    code: -1,
    msg: '接口请求异常'
  }
})

export default service
