<template>
    <div style="padding: 20px">
        <el-row type="flex" justify="space-around">
            <el-radio v-model="currentLabel" label="1" disabled>label=1</el-radio>
            <el-radio v-model="currentLabel" label="2" disabled>label=2</el-radio>
            <el-radio v-model="currentLabel" label="3" disabled>label=3</el-radio>
            <el-radio v-model="currentLabel" label="4" disabled>label=4</el-radio>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'disabled-radio'
}
</script>

<style></style>
