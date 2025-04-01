import { createRouter, createWebHashHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next()
      } else {
        next('/login')
      }
    })
  } else {
    next()
  }
})

export default router