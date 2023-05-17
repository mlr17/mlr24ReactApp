import axios from 'axios'

// 配置项
const axiosOption = {
    baseURL: '/api',
    timeout: 5000
}

// 创建一个单例
const instance = axios.create(axiosOption);

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  let token = localStorage.getItem('cms-token')
  if(token){
    config.headers = {
      'cms-token': token
    }
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 只需要 response 中的 data 数据
  return response.data;
}, function (error) {
  // 对于返回不同状态码的报错，前端可以针对不同的响应错误进行提示。
  return Promise.reject(error);
});

export default instance;