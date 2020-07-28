<template>
    <div style="padding: 20px">
        <el-row type="flex" justify="space-around">
            <el-link disabled>default</el-link>
            <el-link disabled type="primary">primary</el-link>
            <el-link disabled :underline="false">no underline</el-link>
            <el-link disabled icon="el-icon-plus"></el-link>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'disabled-link'
}
</script>

<style></style>
