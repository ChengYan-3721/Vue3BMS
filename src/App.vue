<template>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
<!--    <router-link to="/"></router-link>-->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
</template>

<script setup>


</script>

<style>
html,body,#app{
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
