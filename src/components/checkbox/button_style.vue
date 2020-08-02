<template>
    <div style="padding: 20px">
        <p>{{ `选项1：${checked1}；选项2：${checked2}` }}</p>
        <el-checkbox-button v-model="checked1">选项1</el-checkbox-button>
        <el-checkbox-button v-model="checked2">选项2</el-checkbox-button>
    </div>
</template>

<script>
export default {
    name: 'button-checkbox',
    data() {
        return {
            checked1: false,
            checked2: false
        }
    }
}
</script>

<style></style>
