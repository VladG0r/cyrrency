<template>
  <div>
    <date-picker
      :value="date"
      locale="en"
      class="calendar"
      @input="changeDate($event)"
    />
  </div>
</template>

<script>
import Vue from "vue";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "Calendar",
  components: {
    DatePicker,
  },
  computed: {
    ...mapState(["date"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setValue"]),
    changeDate(evt) {
      this.setValue({ field: "date", value: evt });
      this.$emit("input");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/variables.scss";
.calendar {
  &.vc-container {
    border-color: $light-gray;
    font-family: $main-font;
  }
  &/deep/ {
    .vc-highlight {
      background-color: $primary !important;
    }
  }
}
</style>
