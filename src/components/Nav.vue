<template>
<div>
    <!-- Navbar-->
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light py-3">
            <div class="container">
                <!-- Navbar Brand -->
                <a href="#" class="navbar-brand">
                    <img src="https://bootstrapious.com/i/snippets/sn-registeration/logo.svg" alt="logo" width="150">
                </a>
                <ul class="navbar-nav">
                    <li class="nav-item" v-if="user">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link> 
                    </li> -->
                    <li class="nav-item" v-if="!user">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="!user">
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>
                    <li class="nav-item" v-if="user">
                        <a class="nav-link" href="" @click.prevent="logOut">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</div>
</template>

<script>
export default {
    name: "Nav",

    data() {
        return {
            user: ''
        }
    },
    mounted() {
        if (localStorage.Activeusers) {
            let ltUSer = localStorage.Activeusers
            this.user = JSON.parse(ltUSer)
        }
    },
    methods: {
        logOut() {
            //alert("log out")
            localStorage.removeItem("Activeusers")
            this.$router.push('/login')
            window.location.reload()
        }
    }
}
</script>

<style>

</style>
