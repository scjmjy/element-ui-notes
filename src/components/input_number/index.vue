<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicInputNumber" selected>基础</option>
            <option value="StepPrecision">Step & Precision</option>
            <option value="ControlsPosition">Controls Position</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicInputNumber from './basic_input_number'
import StepPrecision from './step_precision'
import ControlsPosition from './controls_position'

export default {
    name: 'demo-el-input-number',
    components: { BasicInputNumber, StepPrecision, ControlsPosition },
    data() {
        return {
            current: 'BasicInputNumber'
        }
    }
}
</script>

<style></style>
