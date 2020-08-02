<template>
    <div style="padding: 20px">
        <p>{{ `已选择：${checkedList}` }}</p>
        <el-checkbox-group v-model="checkedList" :min="2" :max="4">
            <el-checkbox label="1">选项1</el-checkbox>
            <el-checkbox label="2">选项2</el-checkbox>
            <el-checkbox label="3">选项3</el-checkbox>
            <el-checkbox label="4">选项4</el-checkbox>
            <el-checkbox label="5">选项5</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
export default {
    name: 'checkbox-group',
    data() {
        return {
            checkedList: ['1', '2']
        }
    }
}
</script>

<style></style>
