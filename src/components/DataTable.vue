<template>
  <table>
    <tr>
      <th></th>
      <th>Currency</th>
      <th>Value</th>
    </tr>
    <template v-if="activeRates.length">
      <tr v-for="rate in activeRates" :key="rate.key">
        <td>{{ curSymbols[rate.key] }}</td>
        <td>{{ rate.key }}</td>
        <td>{{ rate.value }}</td>
      </tr>
    </template>
    <tr v-else>
      <td colspan="3"><center>No data</center></td>
    </tr>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
  name: "DataTable",
  computed: {
    ...mapState(["curSymbols"]),
    ...mapGetters(["activeRates"]),
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/variables.scss";

table {
  border: 1px solid $light-gray;
  border-collapse: collapse;
  tr + tr {
    border-top: 1px solid $light-gray;
  }
}

th,
td {
  padding: 10px 15px;
}

th {
  text-align: left;
  background: $primary;
  font-weight: normal;
}
</style>
