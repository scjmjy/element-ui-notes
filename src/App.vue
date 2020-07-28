<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'app',
    components: {}
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.demo-bg-dark {
    background-color: black;
}
.demo-bg-grey {
    background-color: grey;
}
.demo-col-item {
    border-radius: 4px;
    min-height: 36px;
}
.demo-outline {
    outline: brown solid 1px;
}
.demo-aside {
    /* width: 100px; */
}
</style>
