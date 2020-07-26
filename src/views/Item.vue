<template>
<div>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
    </div>
</div>
</template>

<script>

export default {
    name: 'Item',
    computed: {
        post() {
            return this.$store.getters.post(this.$route.params.id)
        }
    }
}
</script>
