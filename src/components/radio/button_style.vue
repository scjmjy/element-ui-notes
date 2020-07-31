<template>
    <div style="padding: 20px">
        <p>性别：{{ gender }}</p>
        <p>年龄：{{ age }}</p>
        <el-radio-group size="mini" v-model="gender">
            <el-radio-button label="male">男</el-radio-button>
            <el-radio-button label="female">女</el-radio-button>
        </el-radio-group>
        <br />
        <br />
        <el-radio-group v-model="age">
            <el-radio-button label="<=18">&lt;=18</el-radio-button>
            <el-radio-button label="19-30">19-30</el-radio-button>
            <el-radio-button label="31-50">31-50</el-radio-button>
            <el-radio-button label=">=51">&gt;=51</el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    name: 'button-style',
    data() {
        return {
            gender: '',
            age: ''
        }
    }
}
</script>

<style></style>