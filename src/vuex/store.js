import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const state = {
  count: 1,
};
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const mutations = {
  add(state) {
    state.count += 1;
  },
  reduce(state) {
    state.count -= 1;
  },
};

const actions = {
  getTableData() {
    return axios({
      method: 'get',
      url: 'http://127.0.0.1:8080/greeting',
    });
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
