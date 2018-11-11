import Vue from "vue";
import Vuex from "vuex";
import { START_PROCESS, END_PROCESS } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    btn: {
      processing: false
    }
  },
  mutations: {
    [START_PROCESS](state) {
      state.btn.processing = true;
    },
    [END_PROCESS](state) {
      state.btn.processing = false;
    }
  }
});
