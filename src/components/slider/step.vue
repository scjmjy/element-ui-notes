<template>
    <div style="padding: 20px">
        <p>{{ `value: ${value}` }}</p>
        <span>step: 10</span>
        <el-slider v-model="value" :step="10"></el-slider>
        <span>show stops: true</span>
        <el-slider v-model="value" :step="10" :show-stops="true"></el-slider>
    </div>
</template>

<script>
export default {
    name: 'step-slider',
    data() {
        return {
            value: 0
        }
    }
}
</script>

<style></style>
