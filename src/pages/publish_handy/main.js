import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import {
    Alert,
    Aside,
    Autocomplete,
    Avatar,
    Button,
    Card,
    Cascader,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    CollapseItem,
    Container,
    DatePicker,
    Descriptions,
    DescriptionsItem,
    Dialog,
    Divider,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Footer,
    Form,
    FormItem,
    Header,
    Icon,
    Image,
    Input,
    InputNumber,
    Link,
    Loading,
    Main,
    Menu,
    MenuItem,
    Message,
    MessageBox,
    Notification,
    Option,
    Pagination,
    Popover,
    Radio,
    RadioGroup,
    Row,
    Select,
    Submenu,
    Table,
    TableColumn,
    TabPane,
    Tabs,
    Tag,
    Tooltip,
    Transfer,
    Tree,
    Upload,
    Carousel,
    CarouselItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Icon)
Vue.use(Upload)
Vue.use(Avatar)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tag)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Popover)
Vue.use(Row)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Link)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(InputNumber)
Vue.use(Tree)
Vue.use(Tabs)
Vue.use(Card)
Vue.use(Alert)
Vue.use(Autocomplete)
Vue.use(TabPane)
Vue.use(Tooltip)
Vue.use(Transfer)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Divider)
Vue.use(Image)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.use(Loading.directive)

Vue.prototype.$ELEMENT = {size: 'small'}
// message 提示有区别
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification

Vue.use(VueMeta)

new Vue({
    render: h => h(App)
}).$mount('#app')
