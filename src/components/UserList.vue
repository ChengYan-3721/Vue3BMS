<template>
    <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" height="250" style="width: 1200px;margin: auto;height: 83%">
        <el-table-column label="头像" width="80px">
            <template #default="scope">
                <el-image style="width: 40px; height: 40px" :src="scope.row.head" :preview-src-list=[scope.row.head] preview-teleported="true" fit="cover" />
            </template>
        </el-table-column>
        <el-table-column prop="name" sortable label="昵称" align="center" />
        <el-table-column prop="sex" sortable label="性别" align="center" />
        <el-table-column prop="age" sortable label="年龄" align="center" />
        <el-table-column prop="feats" sortable label="功勋" />
        <el-table-column prop="job" sortable label="官职" />
        <el-table-column prop="date" sortable label="注册时间" />
        <el-table-column prop="lately" sortable label="最近登录" />
    </el-table>
        <el-pagination
            v-model:currentPage="currentPage"
            v-model:page-size="pageSize"
            background
            layout="prev, pager, next, jumper"
            :total=tableData.length
            hide-on-single-page="true"
            style="margin: auto;width: 40%;height: 80px"
        />
</template>

<script lang="ts">
import {ref} from "vue";
import tableData from '../assets/tableData.json';

export default {
    setup() {
        const currentPage = ref(1)
        const pageSize = ref(11)

        return {tableData, currentPage, pageSize}
    }
}
</script>

<style scoped>

</style>