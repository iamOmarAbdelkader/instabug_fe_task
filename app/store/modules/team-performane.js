import axios from 'axios';

const BASE_URL = 'https://fe-task.getsandbox.com/performance';
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
    commit(TYPES.mutations.SET_LOADING, true);
    axios.get(
      BASE_URL
    ).then(function (response) {
      commit(TYPES.mutations.SET_DATA, response.data);
    }).catch(function (error) {
      commit(TYPES.mutations.SET_ERROR, error);
    }).finally(function () {
      commit(TYPES.mutations.SET_LOADING, false);
    });
  },
};

const mutations = {
  [TYPES.mutations.SET_DATA]: (_state, data) => {
    _state.data = data;
  },
  [TYPES.mutations.SET_LOADING]: (_state, loading) => {
    _state.loading = loading;
  },
  [TYPES.mutations.SET_ERROR]: (_state, error) => {
    _state.error = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
