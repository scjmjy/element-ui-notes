<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicCascader">基础</option>
            <option value="DisabledCascader">Disabled Cascader</option>
            <option value="ShowAllLevels">Show All Levels</option>
            <option value="MultiCascader">Multiple Select</option>
            <option value="CheckStrictly">Check Strictly</option>
            <option value="Lazyload">Lazyload</option>
            <option value="FilterCascader">Filter Cascader</option>
            <option value="CustomNode">Custom Node</option>
            <option value="CascaderPanel">Cascader Panel</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicCascader from './basic_cascader'
import DisabledCascader from './disabled_cascader'
import ShowAllLevels from './show_all_levels'
import MultiCascader from './multi_cascader'
import CheckStrictly from './check_strictly'
import Lazyload from './lazyload'
import FilterCascader from './filter_cascader'
import CustomNode from './custom_node'
import CascaderPanel from './cascader_panel'

export default {
    name: 'demo-el-cascader',
    components: { BasicCascader, DisabledCascader, ShowAllLevels, MultiCascader, CheckStrictly, Lazyload, FilterCascader, CustomNode, CascaderPanel },
    data() {
        return {
            current: 'BasicCascader'
        }
    }
}
</script>

<style></style>
