import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usedActions: []
  },
  mutations: {
    changeUsedActions(state, usedActions) {
      state.usedActions.push(usedActions);
    }
  },
  actions: {
    changeUsedActions(context) {
      context.commit();
    }
  },
  getters: {
    getUsedActions(state) {
      return state.usedActions;
    }
  },
  modules: {}
});
