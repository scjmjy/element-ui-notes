<template>
    <div style="padding: 20px">
        <p>{{ `time: ${time}` }}</p>
        <el-time-picker
            v-model="time"
            :picker-options="{ selectableRange: ['09:30:00 - 12:00:00', '14:30:00 - 18:30:00'] }"
            placeholder="请选择"
        ></el-time-picker>
        <el-time-picker
            v-model="time"
            :picker-options="{ selectableRange: ['09:30:00 - 12:00:00', '14:30:00 - 18:30:00'] }"
            arrow-control
            placeholder="请选择"
        ></el-time-picker>
    </div>
</template>

<script>
export default {
    name: 'time-picker',
    data() {
        return {
            time: ''
        }
    }
}
</script>

<style></style>
