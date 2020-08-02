<template>
    <div style="padding: 20px">
        <p>{{ `当前输入：${num}` }}</p>
        <el-input-number v-model="num" controls-position="right"></el-input-number>
    </div>
</template>

<script>
export default {
    name: 'controls-position',
    data() {
        return {
            num: 1
        }
    }
}
</script>

<style></style>
