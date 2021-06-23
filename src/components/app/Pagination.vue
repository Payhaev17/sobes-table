<template>
  <ul class="pagination center">
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
