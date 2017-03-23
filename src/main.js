import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import Tofu from 'i-tofu';
import App from './App';

Vue.use(Tofu);
Vue.use(VueRouter);

new Vue({
    el:'#app',
    router,
    template: '<App/>',
    components: { App }
})
