<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicLink" selected>基础</option>
            <option value="IconLink">Icon Link</option>
            <option value="Underscore">Underscore</option>
            <option value="DisabledLink">Disabled Link</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicLink from './basic_link'
import IconLink from './icon_link'
import Underscore from './underscore'
import DisabledLink from './disabled_link'

export default {
    name: 'demo-el-link',
    components: { BasicLink, IconLink, Underscore, DisabledLink },
    data() {
        return {
            current: 'BasicLink'
        }
    }
}
</script>

<style></style>
