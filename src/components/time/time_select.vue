<template>
    <div style="padding: 20px">
        <p>{{ `time: ${time}` }}</p>
        <el-time-select
            v-model="time"
            :picker-options="{ start: '00:00', step: '01:00', end: '23:00', minTime: '05:59', maxTime: '21:01' }"
            placeholder="请选择"
        ></el-time-select>
    </div>
</template>

<script>
export default {
    name: 'time-select',
    data() {
        return {
            time: ''
        }
    }
}
</script>

<style></style>
