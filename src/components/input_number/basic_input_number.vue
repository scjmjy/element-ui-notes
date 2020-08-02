<template>
    <div style="padding: 20px">
        <p>{{ `当前输入：${num}` }}</p>
        <el-input-number v-model="num"></el-input-number>
        <el-input-number size="medium" v-model="num"></el-input-number>
        <el-input-number size="small" v-model="num" disabled></el-input-number>
        <el-input-number size="mini" v-model="num" disabled></el-input-number>
    </div>
</template>

<script>
export default {
    name: 'basic-input-number',
    data() {
        return {
            num: 1
        }
    }
}
</script>

<style></style>
