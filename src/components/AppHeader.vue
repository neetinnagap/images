<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">
            Image Storage
        </router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="ui item" @click="login">Galleries</router-link>
                <router-link to="/upload" class="ui item" @click="login">Upload</router-link>
                <a href="#" class="ui item" @click="logout">Logout</a>    
            </div>
            <a v-else href="#" class="ui item" @click="login">Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout'])
}
</script>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
}
</style>