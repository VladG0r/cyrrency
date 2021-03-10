<template>
  <div class="converter">
    <h3>{{ title }}</h3>
    <multiselect
      :value="current"
      :options="options"
      class="styled-select"
      @select="setValue({ field: 'current', value: $event })"
    ></multiselect>
    <pre>{{ rates }}</pre>
  </div>
</template>

<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  name: "Converter",
  props: {
    title: { type: String, default: "" },
  },
  components: {
    Multiselect,
  },
  computed: {
    ...mapState(["rates", "current"]),
    options() {
      return Object.keys(this.rates);
    },
  },
  created() {
    this.$store.dispatch("getRates");
  },
  methods: {
    ...mapMutations(["setValue"]),
  },
});
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
@import "src/styles/variables.scss";

.converter {
  width: 300px;
  max-width: 100%;
  padding: 30px;
}

.styled-select {
  &/deep/ {
    .multiselect__option--highlight {
      background: $primary;
      &::after {
        background: $primary;
      }
    }
  }
}
</style>
