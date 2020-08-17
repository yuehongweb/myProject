import axios from "@/server/axios.js";

export const Login = (data = {}) => {
    return axios.post({ url: "/login", data });
};
