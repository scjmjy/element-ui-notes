<template>
    <div style="padding: 20px">
        <el-input v-model="url" placeholder="请输入URL">
            <template slot="prepend">https://</template>
            <template slot="append">.com</template>
        </el-input>
        <el-input v-model="contact" placeholder="请输入联系方式">
            <el-select style="width:100px" slot="prepend" v-model="contactType" placeholder="请选择">
                <el-option label="手机号码" value="1"></el-option>
                <el-option label="邮箱" value="2"></el-option>
            </el-select>
            <el-button slot="append">确认</el-button>
        </el-input>
    </div>
</template>

<script>
export default {
    name: 'compound-input',
    data() {
        return {
            url: '',
            contact: '',
            contactType: ''
        }
    }
}
</script>

<style></style>
