<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div style="padding-left: 22px;font-size: 20px;color: white"><strong>英雄杀后台管理中心</strong></div>
                <el-dropdown>
                    <span class="el-dropdown-link">{{ user }}<el-icon><arrow-down /></el-icon></span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>账户权限</el-dropdown-item>
                            <el-dropdown-item @click="signOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-switch v-model="isCollapse" style="left: 13px" inline-prompt/>
                    <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        :collapse="isCollapse"
                        background-color="#3c3f41"
                        active-text-color="#ffd04b"
                        text-color="#fff"
                        @select="Select"
                    >
                        <template v-for="(item, id) in menu" :key="id">
                            <el-menu-item v-if="item.Subclass.length == 0" :index="item.id">
                                <el-icon>
                                    <component :is="item.icon"></component>
                                </el-icon>
                                <span>{{ item.title }}</span>
                            </el-menu-item>
                            <el-sub-menu v-if="item.Subclass.length > 0" :index="item.id">
                                <template #title>
                                    <el-icon>
                                        <component :is="item.icon"></component>
                                    </el-icon>
                                    <span>{{ item.title }}</span>
                                </template>
                                <template v-for="(sub, subid) in item.Subclass" :key="subid">
                                    <el-menu-item :index="sub.id">{{ sub.title }}</el-menu-item>
                                </template>
                            </el-sub-menu>
                        </template>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import {reactive, ref, watch} from 'vue'
import router from "../router";
import {Histogram, UserFilled, Coordinate, Tickets, Avatar, ArrowDown} from '@element-plus/icons-vue'

export default {
    components: {Histogram, UserFilled, Coordinate, Tickets, Avatar, ArrowDown},
    setup() {
        const user = localStorage.getItem('token')
        const Array = [
            {
                id: '1',
                icon: Histogram,
                title: '数据分析',
                router: '',
                Subclass: []    // 子级菜单
            },
            {
                id: '2',
                icon: UserFilled,
                title: '玩家列表',
                router: '',
                Subclass: []    // 子级菜单
            },
            {
                id: '3',
                icon: Coordinate,
                title: '游戏记录',
                router: '',
                Subclass: []    // 子级菜单
            },
            {
                id: '4',
                icon: Tickets,
                title: '卡牌管理',
                router: '',
                Subclass: [
                    {
                        id: '4-1',
                        title: '武将牌',
                        router: '',
                        Subclass: []    // 子级菜单
                    },
                    {
                        id: '4-2',
                        title: '基本牌',
                        router: '',
                        Subclass: []    // 子级菜单
                    },
                    {
                        id: '4-3',
                        title: '锦囊牌',
                        router: '',
                        Subclass: []    // 子级菜单
                    },
                    {
                        id: '4-4',
                        title: '装备牌',
                        router: '',
                        Subclass: []    // 子级菜单
                    }
                ]    // 子级菜单
            },
            {
                id: '5',
                icon: Avatar,
                title: '违规处罚',
                router: '',
                Subclass: [    // 子级菜单
                    {
                        id: '5-1',
                        title: '处罚名单',
                        router: '',
                        Subclass: []    // 子级菜单
                    },
                    {
                        id: '5-2',
                        title: '申诉管理',
                        router: '',
                        Subclass: []    // 子级菜单
                    }
                ]
            }
        ]

        const menu = reactive(Array)

        const isCollapse = ref(false)
        // 菜单激活回调
        function Select(index, path){
            switch (index){
                case '1':
                    break;
                case '2':
                    router.push({path: '/home/user_list'});
                    break;
                case '3':
                    break;
                case '4-1':
                    router.push({path: '/home/hero_card'});
                    break;
                case '4-2':
                    router.push({path: '/home/base_Card'});
                    break;
                case '4-3':
                    router.push({path: '/home/silkBag_Card'});
                    break;
                case '4-4':
                    router.push({path: '/home/equip_Card'});
                    break;
                case '5-1':
                    break;
                case '5-2':
                    break;
            }
        }

        watch(isCollapse, (newValue, oldValue) => {
            if (newValue) {
                document.body.style.setProperty('--Collapse', '70px');
            } else {
                document.body.style.setProperty('--Collapse', '210px');
            }
        }, {immediate: true})

        const signOut = ()=>{
            localStorage.removeItem('token');
            router.replace({path: '/'});
        }

        return {menu, isCollapse, user, Select, signOut}
    }
}
</script>

<style scoped>
.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    bottom: 0px;
}

.el-header {
    width: 100%;
    height: 50px;
    color: #333333;
    background: #3c3f41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 5;
}

.el-aside {
    position: fixed;
    width: auto;
    height: 100vh;
    top: 50px;
    background: #3c3f41;
}

:root {
    --Collapse: 70px;
}

.el-main {
    position: fixed;
    width: auto;
    height: 100vh;
    top: 60px;
    left: var(--Collapse);
    right: 0;
    margin: auto;
    /** 动画描述：宽度改变动画 用时 1s*/
    transition: left 0.4s;
}
</style>