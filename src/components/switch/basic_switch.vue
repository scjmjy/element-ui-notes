<template>
    <div style="padding: 20px">
        <p>{{ `switch(value): ${switchState}` }}</p>
        <el-switch
            v-model="switchState"
            active-color="blue"
            inactive-color="red"
            active-text="开"
            inactive-text="关"
            active-value="true/activeValue"
            inactive-value="false/inactiveValue"
        ></el-switch>
    </div>
</template>

<script>
export default {
    name: 'basic-swtich',
    data() {
        return {
            switchState: 'false/inactiveValue'
        }
    }
}
</script>

<style></style>
