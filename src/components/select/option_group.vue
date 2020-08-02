<template>
    <div style="padding: 20px">
        <p>selected: {{ selected }}</p>
        <el-select v-model="selected" placeholder="请选择" clearable>
            <el-option-group v-for="g of groupOptions" :key="g.label" :label="g.label">
                <el-option v-for="o of g.options" :key="o.label" :label="o.label" :value="o.value"></el-option>
            </el-option-group>
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'option-group',
    data() {
        return {
            selected: '',
            groupOptions: [
                {
                    label: '北京',
                    options: [
                        { label: '天安门', value: 'TianAnMen' },
                        { label: '长城', value: 'Changcheng' }
                    ]
                },
                {
                    label: '四川',
                    options: [
                        { label: '宽窄巷子', value: 'KuanZhaiXiangZi' },
                        { label: '九寨沟', value: 'JiuZhaiGou' }
                    ]
                }
            ]
        }
    }
}
</script>

<style></style>
