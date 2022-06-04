<template>
    <el-table :data="equipCardData.slice((currentPage-1)*pageSize,currentPage*pageSize)" border="true" height="250" style="width: 100%;margin: auto;height: 83%">
        <el-table-column label="图片" width="120px">
            <template #default="scope">
                <el-image style="width: 91px; height: 125px" :src="scope.row.img" :preview-src-list=[scope.row.img] preview-teleported="true" fit="cover" />
            </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="80px" align="center" />
        <el-table-column prop="usetime" label="攻击距离" width="90px" align="center" />
        <el-table-column prop="effect" label="装备描述" />
        <el-table-column prop="tips" label="补充说明" />
    </el-table>
    <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        background
        layout="prev, pager, next, jumper"
        :total=equipCardData.length
        hide-on-single-page="true"
        style="margin: auto;width: 40%;height: 80px"
    />
</template>

<script lang="ts">
import {ref} from "vue";
import equipCardData from '../assets/equipCardData.json';

export default {
    setup() {
        const currentPage = ref(1)
        const pageSize = ref(4)

        return {equipCardData, currentPage, pageSize}
    }
}
</script>

<style scoped>

</style>