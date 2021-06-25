<template>
  <Preloader class="preloader" v-if="loading" />
  <div v-else>
    <AppPersonForm :active="addPersonFormActive" @closeEmit="closePersonForm" />
    <SearchForm @searchEmit="searchInTable" />
    <AddNewButton @addEmit="openPersonForm" />
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
    <PersonCard v-if="selectedPerson !== false" :person="selectedPerson" />
  </div>
</template>

<script>
import PersonsTable from "@/components/PersonsTable.vue";
import PersonCard from "@/components/PersonCard.vue";
import AppPersonForm from "@/components/AddNewPerson.vue";

// App
import Preloader from "@/components/app/Preloader.vue";
import Pagination from "@/components/app/Pagination.vue";
import SearchForm from "@/components/app/SearchForm.vue";
import AddNewButton from "@/components/app/AddNewButton.vue";

// Mixins
import PaginationMixin from "@/mixins/pagination.mixin.js";
import SortMixin from "@/mixins/sort.mixin.js";

export default {
  name: "PersonsDashboard",
  components: {
    PersonsTable,
    PersonCard,
    AppPersonForm,

    Preloader,
    Pagination,
    SearchForm,
    AddNewButton,
  },
  mixins: [PaginationMixin, SortMixin],
  data: () => ({
    selectedPerson: false,
    addPersonFormActive: false,
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
    searchInTable(text) {
      try {
        const regExp = new RegExp(text, "i");

        this.allData = this.$store.getters.getPersons.filter((person) => {
          for (const key in person) {
            if (regExp.test(person[key])) return true;
          }
        });
      } catch (e) {}
    },
    selectPerson(person) {
      if (JSON.stringify(this.selectedPerson) !== JSON.stringify(person)) {
        this.selectedPerson = person;
      } else {
        this.selectedPerson = false;
      }
    },
    openPersonForm() {
      this.addPersonFormActive = true;
    },
    closePersonForm() {
      this.addPersonFormActive = false;
    },
  },
};
</script>

<style scoped>
.preloader {
  margin-top: 1em;
}
.card {
  margin-top: 2em !important;
}
</style>
