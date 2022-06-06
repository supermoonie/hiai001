import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import {Row, Col, Card, Button, Image, Loading, Message} from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Button)
Vue.use(Image)
Vue.prototype.$message = Message
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
  render: h => h(App)
}).$mount('#app')
