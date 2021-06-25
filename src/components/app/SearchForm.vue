<template>
  <form class="form">
    <input type="text" placeholder="Поиск" v-model="searchInputText" />
    <a
      class="btn waves-effect waves-light"
      @click.prevent="$emit('searchEmit', searchInputText)"
    >
      <i class="material-icons">search</i>
    </a>
  </form>
</template>

<script>
export default {
  data: () => ({
    searchInputText: "",
  }),
  watch: {
    searchInputText() {
      this.$emit("changedTextEmit", this.searchInputText);
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
}
.btn {
  margin-left: 1em;
}
</style>
