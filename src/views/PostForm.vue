<template>
	<div>
		<form @submit.prevent="submit" class="form-submit">
        <input type="text" placeholder="title" v-model="title">
        <input type="text" placeholder="body" v-model="body">
        <button type="submit">Create Post</button>
    </form>
	</div>
</template>



<script>
import {mapMutations} from 'vuex'
	export default {
	data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    ...mapMutations(["createPost"]),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      })
      this.title=this.body=''
    }
  }



	}
</script>
<style scoped>
	input {
		border: 1px solid #ccc;
		border-radius: 3px;
		padding: 10px;
		margin-bottom: 10px;
	}
	button {
		margin: 0 auto;
		width: 100px;
		height: 30px;
		border-radius: 3px;
		background-color: pink;
		border: 1px solid #eee;
	}
  .form-submit {
    max-width: 320px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
</style>