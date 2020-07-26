import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
      getPosts(ctx) {
          fetch('https://jsonplaceholder.typicode.com/posts')
              .then(res => res.json())
              .then(data => {
                  ctx.commit('add', data)
              })
      },
      getUsers(ctx) {
          fetch('https://jsonplaceholder.typicode.com/users')
              .then(res => res.json())
              .then(data => {
                  ctx.commit('adduser', data)
              })
      }
  },
  mutations: {
      add(state, posts) {
          this.state.posts = posts
      },
      adduser(state, users) {
          this.state.users = users
      },
      createPost(state, newPost) {
        state.posts.push(newPost)
      }
  },
  state: {
      posts: [],
      users: []
  },
  getters: {
      validPosts(state) {
        return state.posts.filter(p=>{
         return p.title && p.body 
        })
      },
      post: s => id => s.posts.find(item => Number(item.id) === Number(id)),
      user: s => id => s.users.find(item => Number(item.id) === Number(id)),
      postsCount(state, getters) {
        return getters.validPosts.length
      }
      
  }
})
