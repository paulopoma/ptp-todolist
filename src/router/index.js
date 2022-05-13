import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../module/tarefa/todolist/view/todoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TodoList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
