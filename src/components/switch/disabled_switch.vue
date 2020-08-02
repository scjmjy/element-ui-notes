<template>
    <div style="padding: 20px">
        <p>{{ `switch(value): ${switchState}` }}</p>
        <el-switch v-model="switchState" active-color="blue" inactive-color="red" active-text="开" inactive-text="关"></el-switch>
        <el-switch v-model="switchState" active-color="blue" inactive-color="red" active-text="开" inactive-text="关" disabled></el-switch>
    </div>
</template>

<script>
export default {
    name: 'disabled-swtich',
    data() {
        return {
            switchState: 'false'
        }
    }
}
</script>

<style></style>
