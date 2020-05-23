import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import '@/icons' // icon
import '@/permission' // permission control
import './utils/global'
import moment from 'moment'
Vue.prototype.$moment = moment
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY/MM/DD HH:mm:ss') {
    if (dataStr) {
        return moment(dataStr).format(pattern)
    } else {
        return ''
    }
})

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
Vue.use(ElementUI);

// new Vue({
//     el: '#app',
//     render: h => h(App)
// });

Vue.config.productionTip = false

export const v = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})