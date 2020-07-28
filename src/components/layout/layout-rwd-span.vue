<template>
    <div>
        <el-row class="demo-outline">
            <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="8">
                <div class="demo-col-item demo-bg-grey">xs:24; sm:20; md:16; lg:12; xl:8;</div>
            </el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="8">
                <div class="demo-col-item demo-bg-grey">8</div>
            </el-col>
            <el-col :span="4">
                <div class="demo-col-item demo-bg-grey">12</div>
            </el-col>
            <el-col :span="4">
                <div class="demo-col-item demo-bg-grey">16</div>
            </el-col>
            <el-col :span="4">
                <div class="demo-col-item demo-bg-grey">20</div>
            </el-col>
            <el-col :span="4">
                <div class="demo-col-item demo-bg-grey">24</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'rwd-layout-span'
}
</script>

<style></style>
