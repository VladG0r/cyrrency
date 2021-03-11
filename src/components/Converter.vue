<template>
  <div class="converter">
    <h3>{{ title }}</h3>
    <div class="row">
      <div class="col">
        <div class="selects">
          <div>
            <label for="base">Base</label>
            <multiselect
              id="base"
              :value="current"
              :options="ratesArr"
              v-bind="sharedOptions"
              class="styled-select"
              @select="selectCurrent($event)"
            >
              <template slot="singleLabel" slot-scope="{ option }">{{
                option
              }}</template>
            </multiselect>
          </div>
          <div>
            <label for="filter">Filter</label>
            <multiselect
              :value="activeRates"
              id="filter"
              :options="ratesArr"
              v-bind="sharedOptions"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Pick some"
              deselectLabel="remove"
              class="styled-select"
              @input="selectMultiple($event)"
            >
              <template #selection="{ isOpen }">
                <span
                  v-if="selectedCount && !isOpen"
                  class="multiselect__single"
                  >{{ selectedCount }} options selected</span
                >
              </template>
            </multiselect>
          </div>
        </div>
        <data-table class="mt-16" />
      </div>
      <div class="col">
        <calendar @input="getRates" class="mt-30" />
      </div>
    </div>
    <pre>{{ rates }}</pre>
  </div>
</template>

<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import DataTable from "./DataTable.vue";
import Calendar from "./Calendar.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default Vue.extend({
  name: "Converter",
  props: {
    title: { type: String, default: "" },
  },
  components: {
    Multiselect,
    DataTable,
    Calendar,
  },
  data() {
    return {
      sharedOptions: {
        label: "key",
        trackBy: "key",
        selectLabel: "select",
        maxHeight: 600,
      },
    };
  },
  computed: {
    ...mapState(["rates", "current", "ratesArr"]),
    ...mapGetters(["activeRates"]),
    activeRates() {
      return this.ratesArr.filter((el) => el.active);
    },
    selectedCount() {
      return this.ratesArr.reduce((acc, el) => acc + el.active, 0);
    },
  },
  created() {
    this.getRates();
  },
  methods: {
    ...mapActions(["getRates"]),
    ...mapMutations(["setValue", "toggleCurrency"]),
    selectCurrent(evt) {
      if (evt && evt.key) {
        this.setValue({ field: "current", value: evt.key });
        this.getRates();
      }
    },
    selectMultiple(arr) {
      this.toggleCurrency(arr);
    },
  },
});
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
@import "src/styles/variables.scss";

.converter {
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
    .multiselect__tags-wrap {
      display: none;
    }
  }
}

.selects {
  display: flex;
  > div {
    flex: 1;
    min-width: 220px;
    max-width: 220px;
    &:first-child {
      margin-right: 16px;
    }
  }
  label {
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }
}
</style>
