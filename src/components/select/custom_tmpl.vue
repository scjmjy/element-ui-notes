<template>
    <div style="padding: 20px">
        <p>selected: {{ selected }}</p>
        <el-select v-model="selected" placeholder="请选择" clearable>
            <el-option v-for="o of options" :key="o.name" :label="o.name" :value="o.name">
                <span style="float: left">{{ o.name }}</span>
                <span style="float: right; color: red">{{ o.food }}</span>
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'custom_tmpl',
    data() {
        return {
            selected: '',
            options: [
                { name: '北京', food: '烤鸭' },
                { name: '成都', food: '火锅' },
                { name: '南翔', food: '小笼包' }
            ]
        }
    }
}
</script>

<style></style>
