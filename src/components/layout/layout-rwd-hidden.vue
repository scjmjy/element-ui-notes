<template>
    <div>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-xs-only">hidden-xs-only</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-sm-only">hidden-sm-only</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-sm-and-down">hidden-sm-and-down</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-sm-and-up">hidden-sm-and-up</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-md-only">hidden-md-only</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-md-and-down">hidden-md-and-down</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-md-and-up">hidden-md-and-up</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-lg-only">hidden-lg-only</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-lg-and-down">hidden-lg-and-down</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-lg-and-up">hidden-lg-and-up</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="24"><div class="demo-col-item demo-bg-grey hidden-xl-only">hidden-xl-only</div></el-col>
        </el-row>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
    name: 'rwd-layout-hidden'
}
</script>

<style></style>
