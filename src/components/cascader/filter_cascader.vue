<template>
    <div style="padding: 20px">
        <p>{{ `selected1：${selected1}` }}</p>
        <p>{{ `selected2：${selected2}` }}</p>
        <el-cascader v-model="selected1" :options="cascaderOptions" filterable placeholder="单选搜索"></el-cascader>
        <el-cascader v-model="selected2" :options="cascaderOptions" filterable :props="{ multiple: true }" placeholder="多选搜索"></el-cascader>
    </div>
</template>

<script>
export default {
    name: 'filter-cascader',
    data() {
        return {
            selected1: '',
            selected2: [],
            cascaderOptions: [
                {
                    label: '北京',
                    value: 'Beijing',
                    children: [
                        { label: '一环', value: 'yihuan' },
                        { label: '二环', value: 'erhuan' }
                    ]
                },
                {
                    label: '上海',
                    value: 'Shanghai',
                    children: [
                        {
                            label: '浦西',
                            value: 'puxi',
                            children: [
                                { label: '徐家汇', value: 'xujiahui' },
                                { label: '人民广场', value: 'renminguangchang' }
                            ]
                        },
                        { label: '浦东', value: 'pudong', children: [{ label: '陆家嘴', value: 'lujiazui' }] },
                        { label: '世博源', value: 'shiboyuan' }
                    ]
                }
            ]
        }
    }
}
</script>

<style></style>
