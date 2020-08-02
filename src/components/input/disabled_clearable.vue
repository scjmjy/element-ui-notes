<template>
    <div style="padding: 20px">
        <p>{{ `当前输入：${text}` }}</p>
        <el-input v-model="text" placeholder="请输入文本" clearable />
        <el-input v-model="text2" disabled />
    </div>
</template>

<script>
export default {
    name: 'disabled_clearable',
    data() {
        return {
            text: '',
            text2: '禁用的 input'
        }
    }
}
</script>

<style></style>
