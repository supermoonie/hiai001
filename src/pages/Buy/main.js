import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import {Row, Col, Loading, Message} from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Row)
Vue.use(Col)
Vue.use(Loading.directive)
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service
Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
  render: h => h(App)
}).$mount('#app')
