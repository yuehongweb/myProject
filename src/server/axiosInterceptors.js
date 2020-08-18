// axios拦截器
import axios from "axios";
const baseUrl = ''
// 请求拦截器
axios.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    config.headers["content-type"] = "application/json";
    config.url = baseUrl + config.url
    console.log(config,'config')
    return config;
}, (error)=> {
    // 对请求错误做些什么
    return error;
  });

// 相应拦截器
axios.interceptors.response.use((res) => {
    return res
}, (error)=> {
    // 对响应错误做点什么
    return error;
  });
