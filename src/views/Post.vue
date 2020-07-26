<template>
<div id="post">
    <h2><center>{{postsCount}}</center></h2>
    
    <div v-for="post in paginatedUsers"
         :key="post.id"
         class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <router-link tag="button"
                     :to="'/post/' + post.id">
            Open
        </router-link>
    </div>

    <div class="table_pagination">
      <div class="page"
        v-for="page in pages"
        :key="page"
        :class="{'page_item' : page === pageNumber}"
        @click="pageClick(page)"
        >{{page}}</div>
    </div>

</div>
</template>


<script>
export default {
  data() {
    return {
      usersPerPages: 10,
      pageNumber: 1
    }
  },

  computed: { 
    validPosts() {
      return this.$store.getters.validPosts
    },
    postsCount() {
      return this.$store.getters.postsCount
    },
    pages() {
      return Math.ceil(this.validPosts.length/10);     
    },
    paginatedUsers() {
      let from=(this.pageNumber-1)*this.usersPerPages;
      let to=from+this.usersPerPages;
      return this.validPosts.slice(from, to);
    }
  },
  methods: {
    pageClick(page) {
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.pageNumber=page;
    }
  }
}

</script>

<style scoped>
  .table_pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
  }
  .table_pagination .page {
    margin: 3px;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #777;

  }
  .page:hover {
    background-color: #ccc;
    cursor: pointer;
    color: #666;
  }
  .page_item {color: pink; font-weight: bold;}
  .post {
    border: 1px solid #777;
    border-radius: 4px;
    margin-top: 1rem;
  }

  #post {
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
</style>

