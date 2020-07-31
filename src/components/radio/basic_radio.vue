<template>
    <div style="padding: 20px">
        <p>currentLabel: {{ currentLabel }}</p>
        <el-row type="flex" justify="space-around">
            <el-radio v-model="currentLabel" label="1">label=1</el-radio>
            <el-radio v-model="currentLabel" label="2">label=2</el-radio>
            <el-radio v-model="currentLabel" label="3">label=3</el-radio>
            <el-radio v-model="currentLabel" label="4">label=4</el-radio>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'basic-link',
    data() {
        return {
            currentLabel: ''
        }
    }
}
</script>

<style></style>
