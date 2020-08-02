<template>
    <div class="home">
        <template v-for="(r, index) of routes">
            <router-link v-if="index != 0" :key="r" :to="r.path" target="_blank">{{ r.name }}<br /></router-link>
        </template>
    </div>
</template>

<script>
import { routes } from '../router/index'
export default {
    name: 'Home',
    data() {
        return {
            routes
        }
    }
}
</script>
