import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

const listener = store => {
    if (!sessionStorage) {
        return;
    }
    store.subscribe((mutation,state) => {
        sessionStorage.setItem('state',JSON.stringify(state));
    });
};

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        dict:{}
    },
    modules:{},
    actions,
    mutations,
    getters,
    plugins:[listener]
});

