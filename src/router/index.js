import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('@/views/Post.vue')
    },
    {
        path: '/post/:id',
        component: () => import('@/views/Item.vue')
    },
    {
        path: '/users',
        component: () => import('@/views/Users.vue')
    },
    {
        path: '/user/:id',
        component: () => import('@/views/ItemUser.vue')
    },
    {
        path: '/postcreate',
        component: () => import('@/views/PostForm.vue')
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router