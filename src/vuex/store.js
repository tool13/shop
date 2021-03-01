import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations/mutations";
import getters from "./getters/getters";
import commonActions from "./actions/common-actions";
import apiRequests from "./actions/api-requests";

const actions = {...apiRequests, ...commonActions};

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    getters,
    mutations,
    actions
});

export default store;
