<template>
    <div style="padding: 20px">
        <p>{{ `密码：${pass}` }}</p>
        <el-input v-model="pass" placeholder="请输入密码" show-password />
    </div>
</template>

<script>
export default {
    name: 'password-input',
    data() {
        return {
            pass: ''
        }
    }
}
</script>

<style></style>
