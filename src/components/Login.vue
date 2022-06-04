<template>
    <div v-if="sign" class="backcont">
        <div class="meituan-content">
            <div class="login-cont">
                <div class="meituan-title">英雄杀玩家管理系统</div>
                <div class="meituan-user">
                    <p>账号</p>
                    <el-input v-model="account" placeholder="请输入账号"/>
                </div>
                <div class="meituan-user">
                    <p>密码</p>
                    <el-input v-model="password" type="password" placeholder="请输入密码" show-password/>
                </div>
                <!--登录和注册的切换-->
                <div class="reg-view"><p style="cursor: pointer;display: contents" @click="sign=!sign">注册</p></div>
                <el-button type="primary" class="meituan-btn" @click="signin">登录</el-button>
            </div>
        </div>
    </div>
    <div v-else class="backcont">
        <div class="meituan-content">
            <div class="login-cont" style="height: 375px">
                <div class="meituan-title">账号注册</div>
                <div class="meituan-user">
                    <p>账号</p>
                    <el-input v-model="account" onkeyup="value=value.replace(/[^\w\.@]/ig,'')" placeholder="请输入账号"/>
                </div>
                <div class="meituan-user">
                    <p>密码</p>
                    <el-input v-model="password" onkeyup="value=value.replace(/[^\w\.@]/ig,'')" type="password" placeholder="请输入密码" show-password/>
                </div>
                <div class="meituan-user">
                    <p>确认密码</p>
                    <el-input v-model="password2" type="password" placeholder="确认密码" show-password/>
                </div>
                <!--登录和注册的切换-->
                <div class="reg-view"><p style="cursor: pointer;display: contents" @click="sign=!sign">已有账号？去登录</p>
                </div>
                <el-button type="primary" class="meituan-btn" @click="register">提交注册</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {reactive, toRefs} from "vue";
import router from "../router";

export default {
    setup() {
        // const accountData: any[] = JSON.parse(localStorage.getItem('accountData'));
        const user = reactive({
            account: '',
            password: '',
            password2: '',
            sign: true,
            accountData: JSON.parse(localStorage.getItem('accountData')) || []
        })
        //登录
        const signin = () => {
            for (let i = 0; i < user.accountData.length; i++) {
                if(user.accountData[i]['account'] === user.account && user.accountData[i]['password'] === user.password){
                    router.replace({path: '/home'});
                    localStorage.setItem('token', user.account);
                    return;
                }
            }
            alert("账号或密码错误！");
        }
        //注册
        const register = () => {
            if(!user.account.trim() || !user.password.trim()){
                alert("账号或密码不能为空！");
                user.password = '';
                user.password2 = '';
                return;
            }
            if(user.password !== user.password2){
                alert("两次密码输入不一致！");
                return;
            }
            for (let i = 0; i < user.accountData.length; i++) {
                if(user.accountData[i]['account'] === user.account){
                    alert("账号已存在！");
                    return;
                }
            }
            user.accountData.push({'account':user.account, 'password': user.password});
            localStorage.setItem('accountData', JSON.stringify(user.accountData));

            console.log(user.accountData);
            alert("注册成功");
            user.sign=!user.sign
            user.account = '';
            user.password = '';
            user.password2 = '';
        }
        return {...toRefs(user), signin, register}
    }

}
</script>

<style scoped>
.backcont {
    width: 100%;
    height: 100%;
    background-image: url("../../src/assets/beijing.jpg");
    /*opacity: 0.7;*/
}

.meituan-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.login-cont {
    width: 500px;
    height: 300px;
    background: #939fd7;
    border-radius: 5px;
}

.meituan-title {
    text-align: center;
    color: #000000;
    font-size: 30px;
    padding-top: 30px;
    font-family: 微软雅黑, Helvetica, sans-serif;
}

.meituan-user {
    width: 400px;
    margin: 0 auto;
    padding-top: 30px;
    height: 40px;
    display: flex;
    align-items: center;
}

.meituan-user p {
    width: 90px;
    font-size: 16px;
    text-align: right;
    padding-right: 10px;
}

.reg-view {
    width: 400px;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    padding-top: 10px;
}

.meituan-btn {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto 0 auto;
    font-size: 16px;
}
</style>