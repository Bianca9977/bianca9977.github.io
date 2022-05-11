import Vue from 'vue'
import router from './router'
import './assets/main.css'
import './assets/common.scss'


import App from './App.vue'
export const bus = new Vue();
new Vue({
    router,
    render: function(h) {
        return h(App)
    }
}).$mount('#app')
