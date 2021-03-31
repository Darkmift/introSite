import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        scrollPosition: 0,
    },
    getters: {
        scrollPosition({ scrollPosition }) {
            return scrollPosition;
        },
    },
    mutations: {
        setScrollPosition(state, { scrollPosition }) {
            state.scrollPosition = scrollPosition;
        },
    },
    actions: {},
    modules: {},
});
