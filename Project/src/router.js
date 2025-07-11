import { createWebHistory, createRouter } from 'vue-router'
import Home from './Home.vue'
import Searcher from './Searcher.vue'
import Character from './Character.vue'

const rutas = [
  { path: '/', component: Home },
  { path: '/searcher', component: Searcher },
  { path: '/personaje/:id', component: Character }
]

const router = createRouter({
  history: createWebHistory(),
  routes: rutas
})

export default router
