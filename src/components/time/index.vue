<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="TimeSelect" selected>Time Select</option>
            <option value="TimePicker" selected>Time Picker</option>
            <option value="TimePickerRange" selected>Time Picker Range</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import TimeSelect from './time_select'
import TimePicker from './time_picker'
import TimePickerRange from './time_picker_range'

export default {
    name: 'demo-el-time',
    components: { TimeSelect, TimePicker, TimePickerRange },
    data() {
        return {
            current: 'TimeSelect'
        }
    }
}
</script>

<style></style>
