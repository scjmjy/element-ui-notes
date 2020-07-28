<template>
    <div>
        <el-row type="flex" align="top" class="demo-outline demo-row">
            <el-col :span="12"><div class="demo-col-item demo-bg-grey">span 12</div></el-col>
        </el-row>
        <el-row type="flex" align="middle" class="demo-outline demo-row">
            <el-col :span="12"><div class="demo-col-item demo-bg-grey">span 12</div></el-col>
        </el-row>
        <el-row type="flex" align="bottom" class="demo-outline demo-row">
            <el-col :span="12"><div class="demo-col-item demo-bg-grey">span 12</div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'flex-layout-align'
}
</script>

<style>
.demo-row {
    height: 100px;
}
</style>
