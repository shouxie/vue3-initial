import Vue from 'vue';
import App from './App.vue';
import router from './router/lazy';
import store from './store/index';
import './registerServiceWorker';
import antd from './antd.config';
import axios from 'axios';
import Viser from 'viser-vue';
import 'ant-design-vue/dist/antd.css';
import Input from './components/Test/index.vue';
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.component('my-input', Input);
antd.init();
Vue.use(Viser);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
