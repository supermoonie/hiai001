import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import {Link} from "element-ui"

Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(Link)

new Vue({
    render: h => h(App)
}).$mount('#app')
