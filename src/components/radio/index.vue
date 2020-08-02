<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicRadio" selected>基础</option>
            <option value="DisabledRadio">Disabled Radio</option>
            <option value="RadioGroup">Radio Group</option>
            <option value="ButtonStyleRadio">Button Style</option>
            <option value="BorderStyleRadio">Border Style</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicRadio from './basic_radio'
import DisabledRadio from './disabled_radio'
import RadioGroup from './radio_group'
import ButtonStyleRadio from './button_style'
import BorderStyleRadio from './border_style'

export default {
    name: 'demo-el-radio',
    components: { BasicRadio, DisabledRadio, RadioGroup, ButtonStyleRadio, BorderStyleRadio },
    data() {
        return {
            current: 'BasicRadio'
        }
    }
}
</script>

<style></style>
