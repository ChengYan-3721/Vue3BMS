// 该文件专门用于创建整个应用的路由器
import {createRouter, createWebHashHistory} from 'vue-router'
// 引入组件
import login from "../components/Login.vue";
import home from "../components/Home.vue";
import userList from "../components/UserList.vue";
import heroCard from "../components/HeroCard.vue";
import baseCard from "../components/BaseCard.vue";
import silkBagCard from "../components/SilkBagCard.vue";
import equipCard from "../components/EquipCard.vue";

const routes = [
    {// 登录界面
        path: '/',
        name: 'login',
        component: login
    },
    {// 登录后首页
        path: '/home',
        name: 'home',
        component: home,
        children:[
            {// 玩家列表
                path: 'user_list',
                name: 'userList',
                component: userList
            },
            {// 武将牌
                path: 'hero_card',
                name: 'heroCard',
                component: heroCard
            },
            {// 基础牌
                path: 'base_Card',
                name: 'baseCard',
                component: baseCard
            },
            {// 锦囊牌
                path: 'silkBag_Card',
                name: 'silkBagCard',
                component: silkBagCard
            },
            {// 装备牌
                path: 'equip_Card',
                name: 'equipCard',
                component: equipCard
            }
        ]
    }
]

//创建并暴露一个路由器
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    let token = localStorage.getItem('token')
    let accountData = JSON.parse(localStorage.getItem('accountData'))

    if(to.path !== '/' && (!token || !accountData)) {
        return '/';
    } else if (to.path !== '/' && accountData) {
        for (let i = 0; i < accountData.length; i++) {
            if (accountData[i]['account'] !== token) {
                alert("登录信息过期，请重新登录！");
                return '/';
            }
        }
    }
    if (to.path === '/' && accountData && token) {
        for (let i = 0; i < accountData.length; i++) {
            if (accountData[i]['account'] === token) {
                return '/home';
            }
        }
    }
    return true
})

export default router