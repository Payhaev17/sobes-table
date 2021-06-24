<template>
  <table class="striped">
    <thead>
      <tr>
        <th
          v-for="(table, idx) in tables"
          :key="idx"
          @click="$emit('sortEmit', allData, table.key, table.sortBy)"
        >
          <span>{{ table.name }}</span>
          <span class="sortinfo" v-if="table.key === sortKey">
            <span v-if="sortUp">▲</span>
            <span v-else>▼</span>
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(data, idx) in viewData"
        :key="idx"
        @click="$emit('selectedEmit', idx)"
      >
        <td>{{ data.id }}</td>
        <td>{{ data.firstName }}</td>
        <td>{{ data.lastName }}</td>
        <td>{{ data.email }}</td>
        <td>{{ data.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    sortKey: String,
    sortUp: Boolean,

    tables: Array,
    viewData: Array,
    allData: Array,
  },
};
</script>

<style scoped>
.sortinfo {
  margin-left: 1em;
}
</style>
