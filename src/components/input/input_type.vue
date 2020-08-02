<template>
    <div style="padding: 20px">
        <p>{{ `单行文本：${text}` }}</p>
        <p>{{ `多行文本：${multiText}` }}</p>
        <p>{{ `密码：${pass}` }}</p>
        <p>{{ `日期：${date}` }}</p>
        <el-input v-model="text" placeholder="default: text" />
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" v-model="multiText" placeholder="textarea" />
        <el-input type="password" v-model="pass" placeholder="password" />
        <el-input type="date" suffix-icon="el-icon-date" min="2020-01-01" max="2020-12-31" v-model="date" placeholder="date" />
    </div>
</template>

<script>
export default {
    name: 'input_type',
    data() {
        return {
            text: '',
            multiText: '',
            pass: '',
            date: ''
        }
    }
}
</script>

<style></style>
