// 封装网络请求
import axios from 'axios'
// import { resolve, reject } from 'core-js/es/promise'
const Login=(data)=>{
    return new Promise((resolve,reject)=>{
        axios({
            method:"POST",
            url:'/login',
            data
        }).then(res=>{
            console.log(res,'serverRes')
            let { status , data: { code } } = res.data
            if( status === 200 && code===0 ){
                resolve(res.data)
            }else{
                reject(res.data)
            }
        }).catch(err=>{
            console.log(err,'err');
        })
    })
    
}
export {
    Login
}