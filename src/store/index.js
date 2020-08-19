import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usedActions: [{
      name: "Text",
      desc: "A simple text field to enter info",
      id: 2,
    },]
  },
  mutations: {
    changeUsedActions(state, usedActions) {
      state.usedActions.push(usedActions);

      // not needed

      //state.usedActions = [...state.usedActions, usedActions[0]]
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
