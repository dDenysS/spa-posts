<template>
<div>
    <div id="post-company">
        <h1>{{ user.company.name }}</h1>
        <p>{{ user.company.catchPhrase }}</p>
        <p>{{ user.company.bs }}</p>
    </div>
</div>
</template>

<script>

export default {
    name: 'ItemUser',
    computed: {
        user() {
            return this.$store.getters.user(this.$route.params.id)
        }
    }
}
</script>

<style scoped>
    #post-company {
      max-width: 480px;
      width: 100%;
      margin: 0 auto;
      border: 1px solid #777;
      padding: 5px;
    }
</style>