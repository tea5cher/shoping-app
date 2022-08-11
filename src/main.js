import Vue from 'vue'
import VueRouter from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Notifications from '@kyvg/vue3-notification'



// app.use(Notifications)


// import router from './router/index'

// Vue.use(VueRouter);

// console.log(router);

createApp(App).use(router).use(store).use(Notifications).mount('#app')
