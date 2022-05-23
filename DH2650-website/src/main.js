import Vue from 'vue'
import router from './router'
import './assets/main.css'
import './assets/common.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'

AOS.init();
export const bus = new Vue();
new Vue({
    router,
    mounted() {
        AOS.init()
    },
    render: function(h) {
        return h(App)
    }
}).$mount('#app')
