import { mock } from "mockjs";

let isAuthenticated = {
    name: 'admin',
    age: '23',
    job: '前端工程师'
}
export default {
'post|/login':  (option) => {
  let { account, password}=option
  if( account === 'admin' && password === 111111 ){
    return {
      status: 200,
      data:{
        code:0,
        message: '登录成功',
        data: isAuthenticated
      }
    };
  }else{
    return {
      name:mock({
        'name|2-10':'wang',// 重复次数区间
        'yi|2':'yibo',//重复次数固定
        'age|+1':1,//初始值加1，没有累加
        'weight|40-50':1,//数值范围
      }),
      status: 500,
      data:{
        code:1,
        message: '账号或密码错误!',
        data: isAuthenticated
      }
    };
  }

}
}