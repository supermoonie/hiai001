import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import {Loading, Message,Descriptions, DescriptionsItem, Tooltip, Divider, Button} from "element-ui"
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Tooltip)
Vue.use(Divider)
Vue.use(Button)
Vue.prototype.$message = Message
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service

new Vue({
    render: h => h(App)
}).$mount('#app')
