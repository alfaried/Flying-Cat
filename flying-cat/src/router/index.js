import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/user/Login'
import Overview from '@/views/home/Overview'
import Profile from '@/views/user/Profile'
import Bootstrap from '@/views/bootstrap/Bootstrap'

import studentManagement from '@/views/student/Student_Management'
import studentAnalytics from '@/views/student/Student_Analytics'

import courseManagement from '@/views/course/Course_Management'
import courseAnalytics from '@/views/course/Course_Analytics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/student/management',
      name: 'Student_Management',
      component: studentManagement,
      meta: { title: 'Student Management' }
    },
    {
      path: '/student/analytics',
      name: 'Student_Analytics',
      component: studentAnalytics,
      meta: { title: 'Student Analytics' }
    },
    {
      path: '/course/management',
      name: 'Course_Management',
      component: courseManagement,
      meta: { title: 'Course Management' }
    },
    {
      path: '/course/analytics',
      name: 'Course_Analytics',
      component: courseAnalytics,
      meta: { title: 'Course Analytics' }
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    }
  ]
})
