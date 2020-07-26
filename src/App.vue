<template>
<div id="app">
    <div>
        <Navbar/>
        <div>
            <router-view/>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    components: {
        Navbar
    },
    created() {
        this.$store.dispatch('getPosts')
        this.$store.dispatch('getUsers')
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {list-style: none;}
ul li {display: flex; padding: 5px;}
</style>