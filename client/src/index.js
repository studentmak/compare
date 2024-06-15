import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Main from './vue/Main.vue'
import News from './vue/News.vue'
import Contacts from './vue/Contacts.vue'
import Tickets from './vue/Tickets.vue'
import News1 from './vue/news/News1.vue'
import News2 from './vue/news/News2.vue'
import News3 from './vue/news/News3.vue'
import News4 from './vue/news/News4.vue'
import News5 from './vue/news/News5.vue'
import News6 from './vue/news/News6.vue'

const router = createRouter({
  routes: [
    {path: '/', component: Main, name: 'Main'},
    {path: '/news', component: News, name: 'News'},
    {path: '/contacts', component: Contacts},
    {path: '/tickets', component: Tickets},
    {path: '/news1', component: News1},
    {path: '/news2', component: News2},
    {path: '/news3', component: News3},
    {path: '/news4', component: News4},
    {path: '/news5', component: News5},
    {path: '/news6', component: News6},
  ],
  history: createWebHistory()
})

createApp(App)
  .use(router)
  .mount('#app')
