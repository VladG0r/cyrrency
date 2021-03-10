import Vue from "vue";
import Vuex from "vuex";
import api from "./plugins/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: "EUR",
    ratesArr: [],
  },
  getters: {
    activeRates: ({ ratesArr }) => ratesArr.filter((e) => e.active),
  },
  mutations: {
    setValue(state, payload) {
      if (state[payload.field] !== undefined) {
        state[payload.field] = payload.value;
      }
    },
    toggleCurrency({ ratesArr }, arr) {
      ratesArr.forEach((el) => {
        if (arr.includes(el)) {
          el.active = true;
        } else {
          el.active = false;
        }
      });
    },
  },
  actions: {
    async getRates({ state: { current }, commit }) {
      const result = await api.get(
        `https://api.ratesapi.io/api/latest?base=${current}`
      );
      if (result.isSuccess && result.data && result.data.rates) {
        commit("setValue", {
          field: "ratesArr",
          value: Object.keys(result.data.rates).map((e) => ({
            key: e,
            value: result.data.rates[e],
            active: true,
          })),
        });
      }
    },
  },
});
