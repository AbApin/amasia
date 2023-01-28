import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      
    };
  },
  mutations: {
    SET_AVELACNEL(state, payload) {
      state[payload.xanutiAnun][payload.apranqiHamar].qanak += 1;
    },
    SET_PAKASACNEL(state, payload) {
      let qanak = state[payload.xanutiAnun][payload.apranqiHamar].qanak;
      if (qanak >= 1) {
        qanak -= 1;
      }
    },
  },
  actions: {
    AVELACNEL({ commit }, xanut) {
      commit('SET_AVELACNEL', xanut);
    },
    PAKASACNEL({ commit }, xanut) {
      commit('SET_PAKASACNEL', xanut);
    },
  },
  getters: {
    XANUTNER(state) {
      return state.xanutner;
    },
  },
});

export default store;
