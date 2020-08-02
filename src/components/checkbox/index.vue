<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicCheckbox">基础</option>
            <option value="BorderCheckbox">With Border</option>
            <option value="ButtonCheckbox">Button Style</option>
            <option value="CheckboxGroup">Checkbox Group</option>
            <option value="IndeterminateCheckbox">Indeterminate</option>
            <option value="DisabledCheckbox">Disabled</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicCheckbox from './basic_checkbox'
import BorderCheckbox from './border_checkbox'
import ButtonCheckbox from './button_style'
import CheckboxGroup from './checkbox_group'
import IndeterminateCheckbox from './indeterminate'
import DisabledCheckbox from './disabled_checkbox'

export default {
    name: 'demo-el-checkbox',
    components: { BasicCheckbox, BorderCheckbox, ButtonCheckbox, CheckboxGroup, IndeterminateCheckbox, DisabledCheckbox },
    data() {
        return {
            current: 'BasicCheckbox'
        }
    }
}
</script>

<style></style>
