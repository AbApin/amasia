import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    xanutner: {},
    isEmpty: true,
  },
  mutations: {
    AVELACNEL_XANUT(state, { xanut }) {
      if (xanut !== '') {
        console.log('avelacav');
        state.xanutner = {
          
        }
        console.log(state);
      }
    },
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
    // INITIAL(state) {
    //   if (localStorage.getItem('xanutner')) {
    //     state.xanutner = JSON.parse(localStorage.xanutner);
    //   } else if (localStorage.getItem('datarkXanutner')) {
    //     state.isEmpty = JSON.parse(localStorage.datarkXanutner);
    //   }
    // },
    REMOVEALL(state) {
      Object.keys(state.xanutner).forEach((xanut) => {
        state.xanutner[xanut].map((el) => {
          el.qanak = 0;
        });
      });
      state.isEmpty = true;
    },
    REMOVEXANUTNER(state) {
      state.xanutner = {};
      state.isEmpty = true;
    },
  },
  getters: {
    XANUTNER(state) {
      return state.xanutner;
    },
    // ZAKAZNER(state) {
    //   let zakazner = {};
    //   if (state.xanutner !== {}) {
    //     Object.keys(state.xanutner).forEach((xanut) => {
    //       zakazner[xanut] = state.xanutner[xanut].filter(function (el) {
    //         return el.qanak > 0;
    //       });
    //       if (zakazner[xanut].length === 0) {
    //         delete zakazner[xanut];
    //       }
    //     });
    //     Object.keys(zakazner).forEach((zakaz) => {
    //       if (zakazner[zakaz].length === 0) {
    //         state.isEmpty = true;
    //       } else {
    //         state.isEmpty = false;
    //       }
    //     });
    //   }

    //   return zakazner;
    // },
    ISEMPTY(state) {
      return state.isEmpty;
    },
  },
});

export default store;
