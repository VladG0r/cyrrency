import Vue from "vue";
import Vuex from "vuex";
import api from "./plugins/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: "EUR",
    rates: {},
  },
  mutations: {
    setValue(state, payload) {
      if (state[payload.field] !== undefined) {
        state[payload.field] = payload.value;
      }
    },
  },
  actions: {
    async getRates({ commit }) {
      const result = await api.get("https://api.ratesapi.io/api/latest");
      if (result.isSuccess && result.data && result.data.rates) {
        commit("setValue", {
          field: "rates",
          value: Object.assign({}, result.data.rates),
        });
      }
    },
  },
});
