import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      xanutner: {
        smail: [
          { anun: 'ԼՈՌԻ', qanak: 0 },
          { anun: 'Չանախ', qanak: 0 },
          { anun: 'ՉԵՉԻԼ', qanak: 0 },
          { anun: 'ՍՈՒԼՈՒԳՈՒՆԻ', qanak: 0 },
          { anun: 'lori', qanak: 0 },
          { anun: 'chanax', qanak: 0 },
          { anun: 'ԿԱՐԱԳ', qanak: 0 },
        ],
        sparapet: [
          { anun: 'ԼՈՌԻ', qanak: 0 },
          { anun: 'Չանախ', qanak: 0 },
          { anun: 'ՉԵՉԻԼ', qanak: 0 },
          { anun: 'ՍՈՒԼՈՒԳՈՒՆԻ', qanak: 0 },
          { anun: 'lori', qanak: 0 },
          { anun: 'chanax', qanak: 0 },
          { anun: 'ԿԱՐԱԳ', qanak: 0 },
        ],
      },
    };
  },
  mutations: {
    increment(state, { xanutiAnun, apranqiHamar }) {
      state[xanutiAnun][apranqiHamar].qanak += 1;
    },
    decrement(state, { xanutiAnun, apranqiHamar }) {
      let qanak = state[xanutiAnun][apranqiHamar].qanak;
      if (qanak >= 1) {
        qanak -= 1;
      }
    },
  },
  getters: {
    XANUTNER(state) {
      return state.xanutner;
    },
  },
});

export default store;
