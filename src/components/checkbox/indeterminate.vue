<template>
    <div style="padding: 20px">
        <el-checkbox :indeterminate="isIndeterminate" v-model="stateCheckAll" @change="handleCheckAllStateChange">{{ textCheckAll }}</el-checkbox>
        <el-checkbox-group v-model="checkedList" @change="handleCheckedListChange">
            <el-checkbox label="1">选项1</el-checkbox>
            <el-checkbox label="2">选项2</el-checkbox>
            <el-checkbox label="3">选项3</el-checkbox>
            <el-checkbox label="4">选项4</el-checkbox>
            <el-checkbox label="5">选项5</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
const list = ['1', '2', '3', '4', '5']
export default {
    name: 'indeterminate',
    data() {
        return {
            checkedList: ['1', '2'],
            stateCheckAll: false
        }
    },
    computed: {
        isIndeterminate() {
            return this.checkedList.length > 0 && this.checkedList.length < list.length
        },
        textCheckAll() {
            return this.stateCheckAll ? '全不选' : '全选'
        }
    },
    methods: {
        handleCheckedListChange(val) {
            this.stateCheckAll = val.length === list.length ? true : false
        },
        handleCheckAllStateChange(val) {
            this.checkedList = val ? list : []
        }
    }
}
</script>

<style></style>
