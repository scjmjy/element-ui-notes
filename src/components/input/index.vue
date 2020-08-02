<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicInput" selected>基础</option>
            <option value="DisabledClearable">Disabled & Clearable</option>
            <option value="PasswordInput">PasswordInput</option>
            <option value="IconInput">IconInput</option>
            <option value="InputType">Input Type</option>
            <option value="CompoundInput">Compound Input</option>
            <option value="Autocomplete">Autocomplete</option>
            <option value="AutocompleteTmpl">Autocomplete & Template</option>
            <option value="LengthLimit">LengthLimit</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicInput from './basic_input'
import DisabledClearable from './disabled_clearable'
import PasswordInput from './password_input'
import IconInput from './icon_input'
import InputType from './input_type'
import CompoundInput from './compound_input'
import Autocomplete from './autocomplete'
import AutocompleteTmpl from './autocomplete_tmpl'
import LengthLimit from './length_limit'

export default {
    name: 'demo-el-input',
    components: { BasicInput, DisabledClearable, PasswordInput, IconInput, InputType, CompoundInput, Autocomplete, AutocompleteTmpl, LengthLimit },
    data() {
        return {
            current: 'BasicInput'
        }
    }
}
</script>

<style></style>
