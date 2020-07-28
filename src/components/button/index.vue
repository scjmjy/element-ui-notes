<template>
    <div style="padding: 20px">
        <select v-model="current" style="margin-bottom: 20px">
            <option value="BasicButton" selected>基础</option>
            <option value="PlainButton">Plain Button</option>
            <option value="TextButton">Text Button</option>
            <option value="RoundedButton">Rounded Button</option>
            <option value="IconButton">Icon Button</option>
            <option value="CircleIconButton">Circle Icon Button</option>
            <option value="DisabledButton">Disabled Button</option>
            <option value="LoadingButton">Loading Button</option>
            <option value="ButtonSize">Button Size</option>
            <option value="ButtonGroup">Button Group</option>
        </select>
        <component :is="current" />
    </div>
</template>

<script>
import BasicButton from './basic_button'
import PlainButton from './plain_button'
import TextButton from './text_button'
import RoundedButton from './rounded_button'
import IconButton from './icon_button'
import CircleIconButton from './circle_icon_button'
import DisabledButton from './disabled_button'
import LoadingButton from './loading_button'
import ButtonSize from './button_size'
import ButtonGroup from './button_group'

export default {
    name: 'layout',
    components: {
        BasicButton,
        PlainButton,
        TextButton,
        RoundedButton,
        IconButton,
        CircleIconButton,
        DisabledButton,
        LoadingButton,
        ButtonSize,
        ButtonGroup
    },
    data() {
        return {
            current: 'BasicButton'
        }
    }
}
</script>

<style></style>
