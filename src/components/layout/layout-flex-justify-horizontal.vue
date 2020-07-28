<template>
    <div>
        <el-row type="flex" justify="start" class="demo-outline">
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
        </el-row>
        <el-row type="flex" justify="center" class="demo-outline">
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
        </el-row>
        <el-row type="flex" justify="end" class="demo-outline">
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
        </el-row>
        <el-row type="flex" justify="space-between" class="demo-outline">
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
        </el-row>
        <el-row type="flex" justify="space-around" class="demo-outline">
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'flex-layout-justfiy'
}
</script>

<style></style>
