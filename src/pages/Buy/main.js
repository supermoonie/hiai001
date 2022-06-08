import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import {Button, Card, Col, Dialog, Image, Link, Loading, Row, Divider} from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Button)
Vue.use(Image)
Vue.use(Dialog)
Vue.use(Link)
Vue.use(Divider)
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
    render: h => h(App)
}).$mount('#app')
