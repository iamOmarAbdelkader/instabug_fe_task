import Vuex from 'vuex';
import Vue from 'vue';
import teamPerformance from './modules/team-performane';
// Load Vuex
Vue.use(Vuex);
// Create store
export default new Vuex.Store({
  modules: {
    teamPerformance,
  },
});
