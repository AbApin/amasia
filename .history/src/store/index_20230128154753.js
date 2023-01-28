import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    AVELACNEL(state, payload) {
      state.xanutner[payload.xanutiAnun][payload.apranqiHamar].qanak += 1;
    },
    PAKASACNEL(state, payload) {
      let qanak = state.xanutner[payload.xanutiAnun][payload.apranqiHamar].qanak;
      console.log(qanak);
      if (qanak >= 1) {
        state.xanutner[payload.xanutiAnun][payload.apranqiHamar].qanak -= 1;
      }
    },
    CUYCTALMAQUR
  },
  getters: {
    XANUTNER(state) {
      return state.xanutner;
    },
  },
});

export default store;
