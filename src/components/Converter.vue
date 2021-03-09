<template>
  <div class="converter">
    <h3>{{ title }}</h3>
    <pre>{{ storeRates }}</pre>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Converter",
  props: {
    title: { type: String, default: "" },
  },
  computed: {
    ...mapGetters(["storeRates"]),
  },
  created() {
    this.$store.dispatch("getRates");
  },
});
</script>

<style lang="scss" scoped>
.converter {
  width: 300px;
  max-width: 100%;
  padding: 30px;
}
</style>
