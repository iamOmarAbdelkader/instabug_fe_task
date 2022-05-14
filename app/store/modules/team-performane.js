import axios from 'axios';
import filterChartDataBetweenDates from '../../utils/filterChartDataBetweenDates';

const BASE_URL = 'https://fe-task.getsandbox.com/performance';
export const TYPES = {
  getters: {
    DATA: 'DATA',
  },
  mutations: {
    SET_LOADING: 'SET_LOADING',
    SET_DATA: 'SET_DATA',
    SET_ERROR: 'SET_ERROR',
    FILTER_DATA: 'FILTER_DATA',
  },
  actions: {
    FETCH_DATA: 'FETCH_DATA',
  },
};

const state = {
  init_data: [],
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
    _state.init_data = data;
  },
  [TYPES.mutations.SET_LOADING]: (_state, loading) => {
    _state.loading = loading;
  },
  [TYPES.mutations.SET_ERROR]: (_state, error) => {
    _state.error = error;
  },
  [TYPES.mutations.FILTER_DATA]: (_state, { from, to }) => {
    let res = filterChartDataBetweenDates(from, to, _state.init_data);
    state.data = res;
    console.log(TYPES.mutations.FILTER_DATA, from, to, res);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
