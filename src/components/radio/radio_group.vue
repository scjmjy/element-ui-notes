<template>
    <div style="padding: 20px">
        <p>性别：{{ gender }}</p>
        <p>年龄：{{ age }}</p>
        <el-radio-group v-model="gender">
            <el-radio label="male">男</el-radio>
            <el-radio label="female">女</el-radio>
        </el-radio-group>
        <br />
        <br />
        <el-radio-group v-model="age">
            <el-radio label="<=18">&lt;=18</el-radio>
            <el-radio label="19-30">19-30</el-radio>
            <el-radio label="31-50">31-50</el-radio>
            <el-radio label=">=51">&gt;=51</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    name: 'radio_group',
    data() {
        return {
            gender: '',
            age: ''
        }
    }
}
</script>

<style></style>