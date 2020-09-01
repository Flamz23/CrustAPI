import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const cssStoreModule = {
  namespaced: true,
  state: {
    // I honestly dont know if this is a good way to do this

    global: {
      sideBarcolor: 'bg-gray-600'
    }
  },
  getters: {
    getColors(state) {
      return state.global
    }
  }
}

const actionStoreModule = {
  namespaced: true,
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
}

export default new Vuex.Store({

  modules: {
    cssStoreModule,
    actionStoreModule
  }
});