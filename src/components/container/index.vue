<template>
    <div style="padding: 20px">
        <select v-model="currentContainer" style="margin-bottom: 20px">
            <option value="HorizontalContainer" selected>水平容器</option>
            <option value="VerticalContainer">垂直容器</option>
            <option value="MixedContainer">混合容器</option>
        </select>
        <component :is="currentContainer" />
    </div>
</template>

<script>
import HorizontalContainer from './horizontal'
import VerticalContainer from './vertical'
import MixedContainer from './mixed'

export default {
    name: 'demo-el-container',
    components: { HorizontalContainer, VerticalContainer, MixedContainer },
    data() {
        return {
            currentContainer: 'HorizontalContainer'
        }
    }
}
</script>

<style></style>
