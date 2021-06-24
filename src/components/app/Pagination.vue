<template>
  <ul class="pagination center">
    <li @click="$emit('fastLeftEmit')" class="waves-effect">
      <i class="material-icons">fast_rewind</i>
    </li>
    <li class="waves-effect">
      <a @click.prevent="$emit('leftEmit')">
        <i class="material-icons">chevron_left</i>
      </a>
    </li>
    <li
      v-for="(pageNum, idx) in pages"
      :key="idx"
      class="waves-effect"
      :class="{ active: pageNum === currPage }"
      @click="$emit('changePageEmit', pageNum)"
    >
      <a>{{ pageNum }}</a>
    </li>
    <li class="waves-effect">
      <a @click.prevent="$emit('rightEmit')">
        <i class="material-icons">chevron_right</i>
      </a>
    </li>
    <li @click="$emit('fastRightEmit')" class="waves-effect">
      <i class="material-icons">fast_forward</i>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currPage: Number,
    pages: Array,
  },
};
</script>

<style scoped>
.active {
  background: #4db6ac !important;
}
</style>
