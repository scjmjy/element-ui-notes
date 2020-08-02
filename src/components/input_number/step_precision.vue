<template>
    <div style="padding: 20px">
        <p>{{ `num1：${num1}, num2：${num2}, num3：${num3}` }}</p>
        <el-input-number v-model="num1" :step="2" :max="10"></el-input-number>
        <el-input-number v-model="num2" :step="2" :max="10" :step-strictly="true"></el-input-number>
        <el-input-number v-model="num3" :step="2" :max="10" :precision="2"></el-input-number>
    </div>
</template>

<script>
export default {
    name: 'step-precision',
    data() {
        return {
            num1: 0,
            num2: 0,
            num3: 0
        }
    }
}
</script>

<style></style>
