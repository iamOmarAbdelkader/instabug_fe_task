import axios from 'axios';

export const TYPES = {
  getters: {
    DATA: 'DATA',
  },
  mutations: {
    SET_LOADING: 'SET_LOADING',
    SET_DATA: 'SET_DATA',
    SET_ERROR: 'SET_ERROR',
  },
  actions: {
    FETCH_DATA: 'FETCH_DATA',
  },
};

const state = {
  data: [],
  loading: false,
  error: null,
};

const getters = {
  [TYPES.getters.DATA]: _state => _state.data,
};

const actions = {
  [TYPES.actions.FETCH_DATA]: function ({ commit }) {
    commit('setLoading', true);
    axios.get(
      'https://fe-task.getsandbox.com/performance'
    ).then(function (response) {
      console.log(response.data, 'res');
      commit('setData', response.data);
    }).catch(function (error) {
      commit('setErr', error);
    }).finally(function () {
      commit('setLoading', false);
    });
  },
};

const mutations = {
  setData: (_state, data) => {
    _state.data = data;
  },
  setLoading: (_state, loading) => {
    _state.loading = loading;
  },
  setErr: (_state, error) => {
    _state.error = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
