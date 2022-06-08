import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import {Loading, Message, Input, Button, Row, Col, Divider, Descriptions, DescriptionsItem, Tooltip} from "element-ui"
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(Input)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Divider)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Tooltip)
Vue.prototype.$message = Message
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service

new Vue({
    render: h => h(App)
}).$mount('#app')
