<template>
    <div style="padding: 20px">
        <p>{{ `当前输入：${text}` }}</p>
        <el-input v-model="text" placeholder="prefix-icon" prefix-icon="el-icon-search" />
        <el-input v-model="text" placeholder="suffix-icon" suffix-icon="el-icon-search" />
        <el-input v-model="text" placeholder="slot:prefix">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input v-model="text" placeholder="slot:suffix">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
    </div>
</template>

<script>
export default {
    name: 'icon-input',
    data() {
        return {
            text: ''
        }
    }
}
</script>

<style></style>
