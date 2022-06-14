import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import {Link, Image, Row, Col, Button} from "element-ui"
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(Link)
Vue.use(Image)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)

new Vue({
    render: h => h(App)
}).$mount('#app')
