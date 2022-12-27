import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'leaflet/dist/leaflet.css';
Vue.config.productionTip = false
import VueHtml2pdf from 'vue-html2pdf'
import wb from "./registerServiceWorker";

Vue.prototype.$workbox = wb;
Vue.use(VueHtml2pdf)
new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')