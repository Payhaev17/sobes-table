<template>
  <Preloader class="preloader" v-if="loading" />
  <div v-else>
    <PersonsTable
      :tables="tables"
      :viewData="viewData"
      @sortEmit="changeSortKey"
    />
    <Pagination
      :currPage="page"
      :pages="getPages"
      @leftEmit="paginationLeft"
      @changePageEmit="changePage"
      @rightEmit="paginationRight"
    />
  </div>
</template>

<script>
import PersonsTable from "@/components/PersonsTable.vue";
import Pagination from "@/components/app/Pagination.vue";

import PaginationMixin from "@/mixins/pagination.mixin.js";
import SortMixin from "@/mixins/sort.mixin.js";

export default {
  name: "PersonsDashboard",
  components: {
    PersonsTable,
    Pagination,
  },
  mixins: [PaginationMixin, SortMixin],
  data: () => ({
    tables: [
      { key: "id", name: "id" },
      { key: "firstName", name: "firstName" },
      { key: "lastName", name: "lastName" },
      { key: "email", name: "email" },
      { key: "phone", name: "phone" },
    ],

    loading: true,
  }),
  async mounted() {
    await this.$store.dispatch("findPersons");

    this.allData = this.$store.getters.getPersons;

    this.loading = false;
  },
};
</script>

<style scope>
.preloader {
  margin-top: 1em;
}
.sortinfo {
  margin-left: 1em;
}
</style>
