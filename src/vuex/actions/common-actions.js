export default {
    SET_MOBILE({commit}) {
        commit('SWITCH_MOBILE');
    },
    SET_DESKTOP({commit}) {
        commit('SWITCH_DESKTOP');
    },
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index);
    },
    GET_SEARCH_VALUE({commit}, value) {
        commit('SET_SEARCH_VALUE', value);
    },
}
