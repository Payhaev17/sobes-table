<template>
  <Preloader class="preloader" v-if="loading" />
  <div v-else>
    <AddPersonForm
      :active="addPersonFormActive"
      @closeEmit="closePersonForm"
      @addPersonEmit="addPerson"
    />
    <SearchForm @searchEmit="searchInTable" />
    <ButtonAdd @addEmit="openPersonForm" />
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
// Components
import PersonsTable from "@/components/PersonsTable.vue";
import PersonCard from "@/components/PersonCard.vue";
import AddPersonForm from "@/components/AddPersonForm.vue";

// App
import Preloader from "@/components/app/Preloader.vue";
import Pagination from "@/components/app/Pagination.vue";
import SearchForm from "@/components/app/SearchForm.vue";
import ButtonAdd from "@/components/app/ButtonAdd.vue";

// Mixins
import PaginationMixin from "@/mixins/pagination.mixin.js";
import SortMixin from "@/mixins/sort.mixin.js";

export default {
  components: {
    PersonsTable,
    PersonCard,
    AddPersonForm,

    Preloader,
    Pagination,
    SearchForm,
    ButtonAdd,
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
    // Sort by id
    this.changeSort(this.allData, "id", "number");

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
      } catch (e) {
        return;
      }
    },
    selectPerson(person) {
      JSON.stringify(this.selectedPerson) !== JSON.stringify(person)
        ? (this.selectedPerson = person)
        : (this.selectedPerson = false);
    },
    openPersonForm() {
      this.addPersonFormActive = true;
    },
    closePersonForm() {
      this.addPersonFormActive = false;
    },
    addPerson(person) {
      person.id = Math.floor(Math.random() * 999);
      person.address = "Empty";

      this.allData.unshift(person);
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
