import { queryLogin } from '@/api/login';

const mutations = {
  SET_TOKEN: (state, data) => {
    state.token = data;
  },
};

const actions = {
  // 登录
  queryLogin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      queryLogin(payload)
        .then((result) => {
          const token = result.data.token;
          commit('SET_TOKEN', token);
          uni.setStorageSync('token', token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const state = {
  token: '',
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
