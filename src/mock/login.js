import { mock, Random } from "mockjs";

let isAuthenticated = {
    name: "admin",
    age: "23",
    job: "前端工程师",
};
Random.extend({
    constellation: function() {
        var constellations = ["白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座"];
        return this.pick(constellations);
    },
});
export default {
    "post|/login": (option) => {
        let { account, password } = JSON.parse(option.body);
        if (account === "admin" && password === "111111") {
            return {
                status: 200,
                message: "登录成功",
                data: isAuthenticated
            };
        } else {
            return {
                name: mock({
                    "name|2-10": "wang", // 重复次数区间
                    "yi|2": "yibo", //重复次数固定
                    "age|+1": 1, //初始值加1，没有累加
                    "weight|40-50": 1, //数值范围
                    "garde|80-90.1-3": 1, //小数范围
                    "gender|1": true, // 生成boolean的概率是1/2
                    "sex|1-3": true, // 生成boolean的概率是1/4
                    "data|2": { name: "远远", age: 23, gender: 1, grade: 40 }, //从对象中随机选择2个属性
                    "data8|1-3": { name: "远远", age: 23, gender: 1, grade: 40 }, //从对象中随机选择1-3个属性
                    "arr|1": ["豆腐", "菠菜", "鸡胸肉", "西蓝花"], //从数组中随机选择1个值
                    "arr2|+1": ["豆腐", "菠菜", "鸡胸肉", "西蓝花"], //从数组中按顺序选择1个值  不起作用
                    "arr3|1-2": ["豆腐", "菠菜", "鸡胸肉", "西蓝花"], //生成一个新数组重复次数介于1-2之间
                    "arr3|3": ["豆腐", "菠菜", "鸡胸肉", "西蓝花"], //生成一个新数组重复次数3
                    formate: function() {
                        return "yuan";
                    }, // 直接返回函数的返回值
                    regexp: /[0-9][a-z][A-Z]/, //直接返回符合正则的值
                    first: "@FIRST", // Mock.Random 占位符
                    middle: "@FIRST",
                    last: "@LAST",
                    full: "@first @middle @last",
                    email: "@email",
                    domain: "@domain",
                    CONSTELLATION: "@CONSTELLATION", //自定义占位符
                }),
                status: 500,
                message: "账号或密码错误!"
            };
        }
    },
};
