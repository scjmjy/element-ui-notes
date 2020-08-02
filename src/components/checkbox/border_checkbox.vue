<template>
    <div style="padding: 20px">
        <p>{{ `选项1：${checked1}；选项2：${checked2}` }}</p>
        <el-checkbox v-model="checked1" border>选项1</el-checkbox>
        <el-checkbox v-model="checked2" size="mini" border>选项2</el-checkbox>
    </div>
</template>

<script>
export default {
    name: 'border-checkbox',
    data() {
        return {
            checked1: false,
            checked2: false
        }
    }
}
</script>

<style></style>
