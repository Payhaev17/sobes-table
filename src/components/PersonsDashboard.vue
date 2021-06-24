<template>
  <Preloader class="preloader" v-if="loading" />
  <div v-else>
    <form class="form" @submit.prevent="srchInTable">
      <input type="text" placeholder="Поиск" v-model="srchInputText" />
      <a class="btn waves-effect waves-light">
        <i class="material-icons">search</i>
      </a>
    </form>
    <PersonsTable
      :sortKey="sortKey"
      :sortUp="sortUp"
      :tables="tables"
      :viewData="viewData"
      :allData="allData"
      @sortEmit="changeSort"
      @selectedEmit="selectPerson"
    />
    <Pagination
      :currPage="page"
      :pages="getPages"
      @leftEmit="paginationLeft"
      @fastLeftEmit="fastLeft"
      @changePageEmit="changePage"
      @rightEmit="paginationRight"
      @fastRightEmit="fastRight"
    />
    <PersonCard
      v-if="selectedPerson !== false"
      :person="viewData[selectedPerson]"
    />
  </div>
</template>

<script>
import PersonsTable from "@/components/PersonsTable.vue";
import PersonCard from "@/components/PersonCard.vue";

import PaginationMixin from "@/mixins/pagination.mixin.js";
import SortMixin from "@/mixins/sort.mixin.js";

export default {
  name: "PersonsDashboard",
  components: {
    PersonsTable,
    PersonCard,
  },
  mixins: [PaginationMixin, SortMixin],
  data: () => ({
    srchInputText: "",
    selectedPerson: false,
    tables: [
      { key: "id", name: "id", sortBy: "number" },
      { key: "firstName", name: "firstName", sortBy: "alphabet" },
      { key: "lastName", name: "lastName", sortBy: "alphabet" },
      { key: "email", name: "email", sortBy: "alphabet" },
      { key: "phone", name: "phone", sortBy: "alphabet" },
    ],

    loading: true,
  }),
  async mounted() {
    await this.$store.dispatch("findPersons");

    this.allData = this.$store.getters.getPersons;
    this.changeSort(this.allData, "id", "number"); // Изначальная сортировка будет по id

    this.loading = false;
  },
  methods: {
    srchInTable() {
      try {
        const regExp = new RegExp(this.srchInputText, "i");

        this.allData = this.$store.getters.getPersons.filter((person) => {
          for (const key in person) {
            if (regExp.test(person[key])) return true;
          }
        });
      } catch (e) {}
    },
    selectPerson(idx) {
      if (this.selectedPerson !== idx) {
        this.selectedPerson = idx;
      } else {
        this.selectedPerson = false;
      }
    },
  },
};
</script>

<style scoped>
.preloader {
  margin-top: 1em;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
}
.inputsrch {
  margin-right: 1em;
}
.btn {
  margin-left: 1em;
}
.card {
  margin-top: 2em !important;
}
</style>
