<template>
    <div style="padding: 20px">
        <p>{{ `value: ${value}` }}</p>
        <el-slider v-model="value" :marks="marks"></el-slider>
    </div>
</template>

<script>
export default {
    name: 'with-marks',
    data() {
        return {
            value: 0,
            marks: {
                0: '0℃',
                37: '37℃',
                100: '100℃'
            }
        }
    }
}
</script>

<style></style>
