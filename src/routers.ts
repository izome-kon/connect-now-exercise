import VideoGamePage from './views/VideoGamePage.vue'
import ContactPage from './views/ContactPage.vue'
import {createRouter,createWebHistory} from 'vue-router'
const routes = [
  {
    name:'videoGamePage',
    component:VideoGamePage,
    path:'/'
  },
   {
    name:'contactPage',
    component:ContactPage,
    path:'/contact'
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router