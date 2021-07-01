import axios from 'axios'

export function request(config){
    // 1.创建axios的实例(是一个promis对象)
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 配置全局拦截器
    // axios.interceptors.request.use()

    // 配置请求拦截器
    instance.interceptors.request.use(config=>{
        // console.log(config)
        // 需要返回
        return config
    }, err=>{
        // console.log(err)
    })

    instance.interceptors.response.use(res=>{
        return res.data
    }, err=>{
        console.log(err)
    })

    // 发送真正的网络请求,返回一个promise对象
    return instance(config)
}