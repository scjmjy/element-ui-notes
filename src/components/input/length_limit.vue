<template>
    <div style="padding: 20px">
        <el-input v-model="text" placeholder="请输入文本" minlength="5" maxlength="10" show-word-limit />
        <el-input v-model="text" placeholder="请输入文本" minlength="5" maxlength="30" show-word-limit type="textarea" />
    </div>
</template>

<script>
export default {
    name: 'length-limit',
    data() {
        return {
            text: ''
        }
    }
}
</script>

<style></style>
