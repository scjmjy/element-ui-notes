<template>
    <div style="padding: 20px">
        <p>{{ `当前输入：${text}` }}</p>
        <el-row>
            <el-col :span="4">
                <el-input v-model="text" placeholder="default=large" />
            </el-col>
            <el-col :span="4">
                <el-input v-model="text" size="large" placeholder="large" />
            </el-col>
            <el-col :span="4">
                <el-input v-model="text" size="medium" placeholder="medium" />
            </el-col>
            <el-col :span="4">
                <el-input v-model="text" size="small" placeholder="small" />
            </el-col>
            <el-col :span="4">
                <el-input v-model="text" size="mini" placeholder="mini" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'basic-input',
    data() {
        return {
            text: ''
        }
    }
}
</script>

<style></style>
