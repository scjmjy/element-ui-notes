<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicIcon" selected>基础</option>
            <option value="ButtonIcon">With Button</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicIcon from './basic_icon'
import ButtonIcon from './button-icon'

export default {
    name: 'layout',
    components: { BasicIcon, ButtonIcon },
    data() {
        return {
            current: 'BasicIcon'
        }
    }
}
</script>

<style></style>
