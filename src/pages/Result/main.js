import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import {Empty} from "element-ui"

Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(Empty)

new Vue({
    render: h => h(App)
}).$mount('#app')
