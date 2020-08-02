<template>
    <div style="padding: 20px">
        <p>selected: {{ selected }}</p>
        <el-select v-model="selected" placeholder="请选择" multiple>
            <el-option label="选项1" value="1"></el-option>
            <el-option label="选项2" value="2"></el-option>
            <el-option label="选项3" value="3"></el-option>
            <el-option label="选项4" value="4"></el-option>
        </el-select>
        <el-select v-model="selected" placeholder="请选择" multiple collapse-tags>
            <el-option label="选项1" value="1"></el-option>
            <el-option label="选项2" value="2"></el-option>
            <el-option label="选项3" value="3"></el-option>
            <el-option label="选项4" value="4"></el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'multi-select',
    data() {
        return {
            selected: []
        }
    }
}
</script>

<style></style>
