<template>
  <div class="converter">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Converter",
  props: {
    title: { type: String, default: "" },
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
