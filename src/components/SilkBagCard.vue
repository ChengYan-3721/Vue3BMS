<template>
    <el-table :data="silkBagCardData.slice((currentPage-1)*pageSize,currentPage*pageSize)" border="true" height="250" style="width: 100%;margin: auto;height: 83%">
        <el-table-column label="图片" width="120px">
            <template #default="scope">
                <el-image style="width: 91px; height: 125px" :src="scope.row.img" :preview-src-list=[scope.row.img] preview-teleported="true" fit="cover" />
            </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="80px" align="center" />
        <el-table-column prop="usetime" label="使用时机" width="200px" />
        <el-table-column prop="usetarget" sortable label="使用效果" width="200px" />
        <el-table-column prop="effect" label="使用目标" />
        <el-table-column prop="tips" label="补充说明" />
    </el-table>
    <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        background
        layout="prev, pager, next, jumper"
        :total=silkBagCardData.length
        hide-on-single-page="true"
        style="margin: auto;width: 40%;height: 80px"
    />
</template>

<script lang="ts">
import {ref} from "vue";
import silkBagCardData from '../assets/silkBagCardData.json';

export default {
    setup() {
        const currentPage = ref(1)
        const pageSize = ref(4)

        return {silkBagCardData, currentPage, pageSize}
    }
}
</script>

<style scoped>

</style>