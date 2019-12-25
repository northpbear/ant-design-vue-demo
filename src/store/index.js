import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import user from "./user";

Vue.use(Vuex);

const state = {
  auth: "admin"
};

export default new Vuex.Store({
  namespace: true,
  state,
  mutations,
  actions,
  modules: {
    user
  }
});
