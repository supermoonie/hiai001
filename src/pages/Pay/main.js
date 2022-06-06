import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import {Loading, Message, Button, Row, Col} from "element-ui"

Vue.use(VueMeta)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.prototype.$message = Message
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
