import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Pricing from './pages/Pricing.vue'
import Customers from './pages/Customers.vue'
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import Documentation from './pages/Documentation.vue'
import Support from './pages/Support.vue'
import Apps from './pages/Apps.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/pricing',
      component: Pricing
    },
    {
      path: '/customers',
      component: Customers
    },    
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/blog-post',
      component: BlogPost
    },
    {
      path: '/documentation',
      component: Documentation
    },
    {
      path: '/support',
      component: Support
    },
    {
      path: '/apps',
      component: Apps
    },    
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/reset-password',
      component: ResetPassword
    }
  ]
})

export default router
