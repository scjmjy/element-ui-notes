<template>
    <div style="padding: 20px">
        <p>{{ `selected：${selected}` }}</p>
        <el-cascader v-model="selected" :options="cascaderOptions" :props="cascaderProps" placeholder="hover 触发"></el-cascader>
        <el-cascader v-model="selected" disabled :options="cascaderOptions" placeholder="click 触发"></el-cascader>
    </div>
</template>

<script>
export default {
    name: 'disabled-cascader',
    data() {
        return {
            selected: [],
            cascaderOptions: [
                {
                    disabled: true,
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
            ],
            cascaderProps: {
                expandTrigger: 'hover'
            }
        }
    }
}
</script>

<style></style>
