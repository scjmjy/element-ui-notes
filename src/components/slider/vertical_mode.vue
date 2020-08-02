<template>
    <div style="padding: 20px">
        <p>{{ `value: ${value}` }}</p>
        <el-slider v-model="value" height="100px" vertical></el-slider>
    </div>
</template>

<script>
export default {
    name: 'vertical-mode',
    data() {
        return {
            value: 0
        }
    }
}
</script>

<style></style>
