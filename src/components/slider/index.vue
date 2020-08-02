<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicSlider" selected>基础</option>
            <option value="StepSlider">Step</option>
            <option value="WithInput">With Input</option>
            <option value="RangeSlider">Range</option>
            <option value="WithMarks">With Marks</option>
            <option value="VerticalMode">Vertical Mode</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicSlider from './basic_slider'
import StepSlider from './step'
import WithInput from './with_input'
import RangeSlider from './range'
import WithMarks from './marks'
import VerticalMode from './vertical_mode'

export default {
    name: 'demo-el-slider',
    components: { BasicSlider, StepSlider, WithInput, RangeSlider, WithMarks, VerticalMode },
    data() {
        return {
            current: 'BasicSlider'
        }
    }
}
</script>

<style></style>
