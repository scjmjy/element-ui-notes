<template>
    <div style="padding: 20px">
        <p>{{ `time: ${time}` }}</p>
        <el-time-picker v-model="time" is-range start-placeholder="开始时间" end-placeholder="结束时间" placeholder="请选择"></el-time-picker>
        <el-time-picker
            v-model="time"
            is-range
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            arrow-control
            placeholder="请选择"
        ></el-time-picker>
    </div>
</template>

<script>
export default {
    name: 'time-picker-range',
    data() {
        return {
            time: ''
        }
    }
}
</script>

<style></style>
