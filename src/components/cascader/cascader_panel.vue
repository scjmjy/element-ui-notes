<template>
    <div style="padding: 20px">
        <p>{{ `selected：${selected}` }}</p>
        <el-cascader-panel v-model="selected" :props="cascaderProps"></el-cascader-panel>
    </div>
</template>

<script>
let id = 0
export default {
    name: 'cascader-panel',
    data() {
        return {
            selected: [],
            cascaderProps: {
                lazy: true,
                lazyLoad(node, resolve) {
                    const level = node.level
                    setTimeout(() => {
                        const nodes = [
                            { label: `选项${++id}`, value: id, leaf: level >= 3 },
                            { label: `选项${++id}`, value: id, leaf: level >= 3 }
                        ]
                        resolve(nodes)
                    }, 1000)
                }
            }
        }
    }
}
</script>

<style></style>
