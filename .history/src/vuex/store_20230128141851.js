import Vuex from 'vuex';
import Vue from 'vue';
import actors from './modules/actors';
import movies from './modules/movies';
import image from './modules/image';

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      count: 0,
    };
  },
});

export default store;
