import Vue from 'vue';
import store from './store';
import VueRouter from 'vue-router';
import router from './router';
import Moment from 'vue-moment';
import Tofu from 'i-tofu';
import App from './App';
import './main.scss';

// 项目需要使用时，再引入
// import ECharts from 'vue-echarts/components/ECharts.vue'
// 手动导入模块，为了减小包体积
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'

// Vuex 的注册在store/index.js文件中
Vue.use(Tofu);
Vue.use(Tofu.Tabbar, {
    defaultTab: {
        label: '首页',
        path: '/system/dashboard'
    }
});
Vue.use(Moment);
Vue.use(VueRouter);

new Vue({
    el:'#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});
