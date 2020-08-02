<template>
    <div style="padding: 20px">
        <p>{{ `range: ${value}` }}</p>
        <el-slider v-model="value" range></el-slider>
    </div>
</template>

<script>
export default {
    name: 'range-slider',
    data() {
        return {
            value: [20, 90]
        }
    }
}
</script>

<style></style>
