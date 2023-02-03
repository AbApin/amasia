import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    xanutner: {
      cgffgdgdfgd: [
        { anun: 'ՍՈՒԼՈՒԳՈՒՆԻ', qanak: 0 },
        { anun: 'Ամասիա', qanak: 0 },
        { anun: 'Լոռի մեծ', qanak: 0 },
        { anun: 'Լոռի փոքր', qanak: 0 },
        { anun: 'Լոռի վակուում', qanak: 0 },
        { anun: 'Ոչխարի Պանիր', qanak: 0 },
        { anun: 'Չանախ', qanak: 0 },
        { anun: 'Չանախ էժան', qanak: 0 },
        { anun: 'Չեչիլ սպիտակ մատ', qanak: 0 },
        { anun: 'Չեչիլ սպիտակ կծիկ', qanak: 0 },
        { anun: 'Չեչիլ ապխտած', qanak: 0 },
        { anun: 'ԿԱՐԱԳ', qanak: 0 },
        { anun: 'ԿԱՐԱԳ', qanak: 0 },
        { anun: 'ԿԱՐԱԳ', qanak: 0 },
        { anun: 'ԿԱՐԱԳ', qanak: 0 },
        { anun: 'ԿԱՐԱԳ', qanak: 0 },
      ]
    },
    isEmpty: true,
  },
  mutations: {
    AVELACNEL(state, payload) {
      state.xanutner[payload.xanutiAnun][payload.apranqiHamar].qanak += 1;
    },
    PAKASACNEL(state, payload) {
      let qanak = state.xanutner[payload.xanutiAnun][payload.apranqiHamar].qanak;
      if (qanak >= 1) {
        state.xanutner[payload.xanutiAnun][payload.apranqiHamar].qanak -= 1;
      }
      console.log(state.$getters.ZAKAZNER);
    },
    INITIAL(state) {
      if (localStorage.getItem('xanutner')) {
        state.xanutner = JSON.parse(localStorage.xanutner);
      } else if (localStorage.getItem('datarkXanutner')) {
        state.isEmpty = JSON.parse(localStorage.datarkXanutner);
      }
    },
    REMOVEALL(state) {
      Object.keys(state.xanutner).forEach((xanut) => {
        state.xanutner[xanut].map((el) => {
          el.qanak = 0;
        });
      });
      state.isEmpty = true;
    },
  },
  getters: {
    XANUTNER(state) {
      localStorage.setItem('key', JSON.stringify(state));
      return state.xanutner;
    },
    ZAKAZNER(state) {
      let zakazner = {};
      Object.keys(state.xanutner).forEach((xanut) => {
        zakazner[xanut] = state.xanutner[xanut].filter(function (el) {
          return el.qanak > 0;
        });
        if (zakazner[xanut].length === 0) {
          delete zakazner[xanut];
        }
      });
      Object.keys(zakazner).forEach((zakaz) => {
        if (zakazner[zakaz].length === 0) {
          state.isEmpty = true;
        } else {
          state.isEmpty = false;
        }
      });

      return zakazner;
    },
    ISEMPTY(state) {
      return state.isEmpty;
    },
  },
});

export default store;
