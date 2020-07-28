// 封装网络请求
import axios from 'axios'
const Login=(data)=>{
    axios({
        method:"POST",
        url:'/login',
        data
    }).then(res=>{
        console.log(res)
    })
}
export {
    Login
}