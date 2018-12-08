// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)
Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBVxh41PpQcmDOCzbZi9sSGqjUO4nJ_N-M',
  authDomain: 'vue-school-forum-224bd.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-224bd.firebaseio.com',
  projectId: 'vue-school-forum-224bd',
  storageBucket: 'vue-school-forum-224bd.appspot.com',
  messagingSenderId: '167837826982'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate () {
    store.dispatch('fetchUser', {id: store.state.authId})
  }
})
