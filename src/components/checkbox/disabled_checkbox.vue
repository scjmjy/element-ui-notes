<template>
    <div style="padding: 20px">
        <p>{{ `已选择：${checkedList}` }}</p>
        <el-checkbox-group v-model="checkedList" disabled>
            <el-checkbox label="1">选项1</el-checkbox>
            <el-checkbox label="2">选项2</el-checkbox>
            <el-checkbox label="3" border>选项3</el-checkbox>
        </el-checkbox-group>
        <el-checkbox label="4" disabled>选项4</el-checkbox>
        <el-checkbox label="5" border disabled>选项5</el-checkbox>
    </div>
</template>

<script>
export default {
    name: 'disabled_checkbox',
    data() {
        return {
            checkedList: ['1', '2']
        }
    }
}
</script>

<style></style>
