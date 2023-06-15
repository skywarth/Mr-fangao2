import { createStore } from "vuex";
//vuex持久化插件,解决刷新页面vuex数据丢失的问题
import createPersistedState from "vuex-persistedstate"
export const store = createStore({
  plugins: [createPersistedState()],
  state: {
    finish: 9999999999666666666,
    state:{
      userId : ''
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
