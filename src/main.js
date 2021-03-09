import Vue from "vue";
import App from "./app.vue";
import store from "./store";

new Vue({
  store,
  el: "#entry-point",
  render: (h) => h(App),
});
