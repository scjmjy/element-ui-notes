<template>
    <div style="padding: 20px">
        <p>{{ `value: ${value}` }}</p>
        <span>step: 10</span>
        <el-slider v-model="value" :step="10" :show-input="true"></el-slider>
    </div>
</template>

<script>
export default {
    name: 'with-input',
    data() {
        return {
            value: 0
        }
    }
}
</script>

<style></style>
