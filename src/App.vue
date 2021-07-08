<template>
  <SelectRows v-if="rowsQuantity === false" @selectEmit="changeRowsQuantity" />
  <PersonsDashboard v-else :rowsQuantity="rowsQuantity" />
</template>

<script>
import SelectRows from "@/components/app/SelectRows.vue";
import PersonsDashboard from "@/components/PersonsDashboard.vue";

export default {
  name: "App",
  components: {
    SelectRows,
    PersonsDashboard,
  },
  data: () => ({
    rowsQuantity: false,
  }),
  methods: {
    changeRowsQuantity(quantity) {
      this.rowsQuantity = quantity;
    },
  },
};
</script>

<style scope>
#app {
  width: 900px;
  margin: 0 auto;
  text-align: center;
}
</style>
