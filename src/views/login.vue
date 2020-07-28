<template>
    <div class="Login">
        <div class="center">
            <h2>登录</h2>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="top">
                <el-form-item label="用户名" prop="account">
                    <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <div class="submitBtn" @click="submitForm('ruleForm')">登录</div>
            </el-form>
        </div>
    </div>
</template>

<script>
import {Login} from '@/server/index.js'
export default {
    data() {
        return {
            // 表单数据
            ruleForm: {
                account: null,
                password: null,
            },
            // 校验规则
            rules: {
                account: [{ required: true, message: "请输入账号", trigger: "blur" }],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }],
            },
        };
    },
    methods: {
        // 登录
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
					console.log(Login)
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="less">
.Login {
    width: 100%;
    height: 100vh;
    position: relative;
    // 在css中使用别名需要在前面加一个~
    background-image: url("~@asset/images/bg-login.png");
    .center {
        width: 500px;
        height: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 10px;
        padding: 50px 100px;
        .submitBtn {
            margin-top: 50px;
            height: 40px;
            width: 100%;
            background-image: linear-gradient(to right, #0e51a8, #3396ff);
            border-radius: 5px;
            color: #fff;
            font-size: 16px;
            text-align: center;
            line-height: 40px;
        }
    }
}
</style>
