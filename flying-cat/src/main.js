// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

// import '@/styles/variables.scss'
// import '@/styles/index.scss'
import '@/icons'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

const showNavBar = Vue.observable({ status: false })
Object.defineProperty(Vue.prototype, '$showNavBar', {
  get () {
    return showNavBar.status
  },

  set (value) {
    showNavBar.status = value
  }
})

const activeNavBarIndex = Vue.observable({ index: '/' })
Object.defineProperty(Vue.prototype, '$activeNavBarIndex', {
  get () {
    return activeNavBarIndex.index
  },

  set (value) {
    activeNavBarIndex.index = value
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
