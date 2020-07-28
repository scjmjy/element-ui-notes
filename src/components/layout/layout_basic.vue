<template>
    <div>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey">span 24</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="12"><div class="demo-col-item demo-bg-grey">span 12</div></el-col>
            <el-col :span="12"><div class="demo-col-item demo-bg-grey">span 12</div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'basic-layout'
}
</script>

<style></style>
