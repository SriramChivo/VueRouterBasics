import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const central = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        mulres: (state) => {
            return state.counter * 2
        },
        mulresten: (state) => {
            return state.counter * 10
        }
    },
    mutations: {
        sumten: (state, val) => {
            state.counter = state.counter + val
            // return state.counter
        },
        decten: (state, val) => {
            state.counter = state.counter - val
            // return state.counter
        }
    },
    actions: {
        asyncsumten: (context, values) => {
            setTimeout(
                () => {
                    context.commit('sumten', values.value)
                }, values.duration)

        },
        asyncdecten: (context, values) => {
            setTimeout(
                () => {
                    context.commit('decten', values.value)
                }, values.duration)

        }
    }
})