import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Test from './vue/Test.vue'

const router = createRouter({
  routes: [
    {path: '/', component: Test}
  ],
  history: createWebHistory()
})

createApp(App)
  .use(router)
  .mount('#app')
