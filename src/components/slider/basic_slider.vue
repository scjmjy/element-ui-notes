<template>
    <div style="padding: 20px">
        <p>{{ `value: ${value}` }}</p>
        <span>默认：0-100</span>
        <el-slider v-model="value"></el-slider>
        <span>show tooltip: false</span>
        <el-slider v-model="value" :show-tooltip="false"></el-slider>
        <span>format tooltip</span>
        <el-slider v-model="value" :format-tooltip="format"></el-slider>
        <span>min: 10, max: 20</span>
        <el-slider v-model="value2" :min="10" :max="20"></el-slider>
        <span>disabled</span>
        <el-slider v-model="value" disabled=""></el-slider>
    </div>
</template>

<script>
export default {
    name: 'basic-slider',
    data() {
        return {
            value: 0,
            value2: 0
        }
    },
    methods: {
        format(val) {
            return val.toFixed(2)
        }
    }
}
</script>

<style></style>
