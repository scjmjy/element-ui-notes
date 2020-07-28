<template>
    <div style="padding: 20px">
        <select v-model="currentLayout" style="margin-bottom: 20px">
            <option value="basic-layout" selected>基础布局</option>
            <option value="gutters-layout">With Gutters</option>
            <option value="offset-layout">With Offset</option>
            <option value="flex-layout-justify">With Flex and Justify</option>
            <option value="flex-layout-align">With Flex and Align</option>
            <option value="RWDLayoutSpan">RWD span</option>
            <option value="RWDLayoutHidden">RWD hidden</option>
        </select>
        <component :is="currentLayout" />
    </div>
</template>

<script>
import BasicLayout from './layout_basic'
import GuttersLayout from './layout_gutters'
import OffsetLayout from './layout_offset'
import FlexLayoutJustify from './layout-flex-justify-horizontal'
import FlexLayoutAlign from './layout-flex-justify-vertical'
import RWDLayoutSpan from './layout-rwd-span'
import RWDLayoutHidden from './layout-rwd-hidden'

export default {
    name: 'layout',
    components: { BasicLayout, GuttersLayout, OffsetLayout, FlexLayoutJustify, FlexLayoutAlign, RWDLayoutSpan, RWDLayoutHidden },
    data() {
        return {
            currentLayout: 'basic-layout'
        }
    }
}
</script>

<style></style>
