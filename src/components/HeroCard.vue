<template>
    <el-table :data="heroData.slice((currentPage-1)*pageSize,currentPage*pageSize)" border="true" height="250" style="width: 100%;margin: auto;height: 83%">
        <el-table-column label="头像" width="135px">
            <template #default="scope">
                <el-image style="width: 108px; height: 138px" :src="scope.row.head" :preview-src-list=[scope.row.head] preview-teleported="true" fit="cover" />
            </template>
        </el-table-column>
        <el-table-column prop="name" sortable label="英雄" width="150px" />
        <el-table-column prop="sex" label="性别" width="50px" align="center" />
        <el-table-column prop="blood" label="血量" width="50px" align="center" />
        <el-table-column prop="camp" sortable label="阵营" width="50px" align="center" />
        <el-table-column prop="ASkill" label="主动技能" />
        <el-table-column prop="PSkill" label="被动技能" />
    </el-table>
    <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        background
        layout="prev, pager, next, jumper"
        :total=heroData.length
        hide-on-single-page="true"
        style="margin: auto;width: 40%;height: 80px"
    />
</template>

<script lang="ts">
import {ref} from "vue";
import heroData from '../assets/heroData.json';

export default {
    setup() {
        const currentPage = ref(1)
        const pageSize = ref(4)

        return {heroData, currentPage, pageSize}
    }
}
</script>

<style scoped>

</style>