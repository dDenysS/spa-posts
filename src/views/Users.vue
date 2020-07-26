<template>
<div id="user">
   <div class="wrapper">
      <div @click="sortByName">User name ^</div>
      <div @click="sortByEmail">Email ^</div>
   </div>
    <div v-for="user in users"
         :key="user.id"
         class="user">
        <h2>{{ user.username }}</h2>
        <p>{{ user.email }}</p>
         <router-link tag="button"
                     :to="'/user/' + user.id">
            Info
        </router-link>
    </div>
</div>
</template>


<script>
export default {
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    methods: {
      sortByName() {
        this.users.sort((a,b)=>a.name.localeCompare(b.name))
      },
      sortByEmail() {
        this.users.sort((a,b)=>a.email.localeCompare(b.email))
      }
    }
}

</script>


<style>
  .user {
    border: 1px solid #eee;
    border-radius: 4px;
    margin-top: 1rem;
  }
  .user {
      margin: 0 auto;
      max-width: 500px;
      width: 100%;
  }
  button {
    margin: 0 auto;
    width: 100px;
    height: 30px;
    border-radius: 3px;
    background-color: pink;
    border: 1px solid #eee;
  }
  .wrapper {
    max-width: 480px;
    margin: 0 auto 10px;
    display: flex;
    justify-content: space-between;
  }
</style>
