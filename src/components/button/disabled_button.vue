<template>
    <div>
        <el-row>
            <el-button disabled type="primary">primary</el-button>
            <el-button disabled type="text">text btn</el-button>
            <el-button disabled type="primary" plain>plain & primary</el-button>
            <el-button disabled type="warning" icon="el-icon-check"></el-button>
            <el-button disabled type="danger" icon="el-icon-remove" circle></el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'disabled_button'
}
</script>

<style></style>
