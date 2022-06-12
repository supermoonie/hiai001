import Vue from 'vue'
import App from './App.vue'
import {
    Loading,
    Message,
    Carousel,
    CarouselItem,
    Image,
    Link
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueMeta from 'vue-meta'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Link)
Vue.use(Loading.directive)
// message 提示有区别
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service
Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
    render: h => h(App)
}).$mount('#app')
