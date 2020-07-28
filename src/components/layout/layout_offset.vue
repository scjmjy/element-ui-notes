<template>
    <div>
        <el-row class="demo-outline">
            <el-col :span="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6" :offset="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
        </el-row>
        <el-row class="demo-outline">
            <el-col :span="6" :offset="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
            <el-col :span="6" :offset="6"><div class="demo-col-item demo-bg-grey">span 6</div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'offset-layout'
}
</script>

<style></style>
