<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicSelect" selected>基础</option>
            <option value="DisabledSelect" selected>Disabled Select</option>
            <option value="MultiSelect" selected>Multiple Select</option>
            <option value="CustomTmpl" selected>Custom Template</option>
            <option value="OptionGroup" selected>Option Group</option>
            <option value="FilterSelect" selected>Filter</option>
            <option value="RemoteSelect" selected>Remote Search</option>
            <option value="AllowCreate" selected>Allow Create</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicSelect from './basic_select'
import DisabledSelect from './disabled_select'
import MultiSelect from './multi_select'
import CustomTmpl from './custom_tmpl'
import OptionGroup from './option_group'
import FilterSelect from './filter_select'
import RemoteSelect from './remote_select'
import AllowCreate from './allow_create'

export default {
    name: 'demo-el-select',
    components: { BasicSelect, DisabledSelect, MultiSelect, CustomTmpl, OptionGroup, FilterSelect, RemoteSelect, AllowCreate },
    data() {
        return {
            current: 'BasicSelect'
        }
    }
}
</script>

<style></style>
