import axios from "axios";
import { Message, Loading } from "element-ui";

// 常见的状态码
const statusMessage = {
    400: "请求错误",
    401: "未授权的访问，请登录",
    403: "被拒绝的请求",
    404: "请求的资源不存在",
    405: "请求方法错误",
    406: "请求格式错误",
    408: "请求超时",
    410: "请求的资源已被永久删除",
    413: "请求数据过大",
    414: "请求链接过长",
    500: "服务器错误",
    503: "服务暂不可用",
};
const POST = ({ url, data, isLoading = true, showError = true }) => {
    let loading = null;
    if (isLoading) {
        loading = Loading.service({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
        });
    }
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: "POST",
            data,
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    if (res.data.status === 200) {
                        // 业务代码正确
                        resolve(res.data);
                    } else {
                        // 业务代码不正确
                        reject(res.data);
                        showError &&
                            Message({
                                showClose: true,
                                message: res.data.message,
                                type: "warning",
                            });
                    }
                    loading && loading.close();
                } else {
                    // http 状态码不等于200
                    if (res.status && statusMessage[res.status]) {
                        Message.error(statusMessage[res.status]);
                    }
                    loading && loading.close();
                }
            })
            .catch((err) => {
                reject(err);
                loading && loading.close();
            });
    });
};

export default class Axios {
    static post(options) {
        return POST(options);
    }
}
