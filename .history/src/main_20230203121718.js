import Vue from 'vue';
import App from './App.vue';
import store from './store';
store.subscribe((mutation, state) => {
  if(mutation.type === 'AVELACNEL_XANUT' || mutation.type === 'AVELACNEL_XANUT' || mutation.type === 'AVELACNEL_XANUT'){
    localStorage.setItem('xanutner', JSON.stringify(state.xanutner));
  }
  localStorage.setItem('datarkXanutner', JSON.stringify(state.isEmpty));
});
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
