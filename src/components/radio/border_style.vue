<template>
    <div style="padding: 20px">
        <p>性别：{{ gender }}</p>
        <p>年龄：{{ age }}</p>
        <el-radio-group size="mini" v-model="gender">
            <el-radio label="male" border>男</el-radio>
            <el-radio label="female" border>女</el-radio>
        </el-radio-group>
        <br />
        <br />
        <el-radio-group v-model="age">
            <el-radio label="<=18" border>&lt;=18</el-radio>
            <el-radio label="19-30" border>19-30</el-radio>
            <el-radio label="31-50" border>31-50</el-radio>
            <el-radio label=">=51" border disabled>&gt;=51</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    name: 'border-style',
    data() {
        return {
            gender: '',
            age: ''
        }
    }
}
</script>

<style></style>