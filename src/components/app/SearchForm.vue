<template>
  <form class="form" @submit.prevent="$emit('searchEmit', searchInputText)">
    <input type="text" placeholder="Поиск" v-model="searchInputText" />
    <a class="btn waves-effect waves-light">
      <i class="material-icons">search</i>
    </a>
  </form>
</template>

<script>
export default {
  data: () => ({
    searchInputText: "",
  }),
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
