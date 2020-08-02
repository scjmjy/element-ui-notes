<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicSwitch" selected>基础</option>
            <option value="DisabledSwitch">Disabled Switch</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicSwitch from './basic_switch'
import DisabledSwitch from './disabled_switch'

export default {
    name: 'demo-el-switch',
    components: { BasicSwitch, DisabledSwitch },
    data() {
        return {
            current: 'BasicSwitch'
        }
    }
}
</script>

<style></style>
