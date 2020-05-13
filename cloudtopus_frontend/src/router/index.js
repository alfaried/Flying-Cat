import Vue from 'vue'
import Router from 'vue-router'

import Introcution from '@/views/intro/Introduction'

import Login from '@/views/user/Login'
import Overview from '@/views/home/Overview'
import Profile from '@/views/user/Profile'
import Bootstrap from '@/views/bootstrap/Bootstrap'

import studentManagement from '@/views/student/Student_Management'
import studentAnalytics from '@/views/student/Student_Analytics'

import courseManagement from '@/views/course/Course_Management'
import courseAnalytics from '@/views/course/Course_Analytics'

import applicationManagement from '@/views/server/Application_Management'
import applicationDetail from '@/views/server/Application_Detail'
import cloudProfile from '@/views/server/Cloud_Profile'
import serviceDetail from '@/views/server/Service_Detail.'

import trailheadManagement from '@/views/trailhead/Trailhead_Management'
import trailheadProfile from '@/views/trailhead/Trailhead_Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introcution
    },
    {
      path: '/login',
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
      path: '/server/management',
      name: 'Application_Management',
      component: applicationManagement,
      props: true
    },
    {
      path: '/server/management/:applicationIP',
      name: 'Application_Detail',
      component: applicationDetail,
      props: true
    },
    {
      path: '/server/management/:profileID',
      name: 'Cloud_Profile',
      component: cloudProfile,
      props: true
    },
    {
      path: '/server/management/:profileID/:serviceID',
      name: 'Service_Detail',
      component: serviceDetail,
      props: true
    },
    {
      path: '/trailhead/management',
      name: 'Trailhead_Management',
      component: trailheadManagement,
      props: true
    },
    {
      path: '/trailhead/management/:profileID',
      name: 'Trailhead_Profile',
      component: trailheadProfile,
      props: true
    },
    {
      path: '/bootstrap/:action',
      name: 'Bootstrap',
      component: Bootstrap,
      props: true
    }
  ]
})
