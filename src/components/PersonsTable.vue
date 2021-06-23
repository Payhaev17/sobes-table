<template>
  <table class="striped">
    <thead>
      <tr>
        <th
          v-for="(table, idx) in tables"
          :key="idx"
          @click="$emit('sortEmit', table.key)"
        >
          <span>{{ table.name }}</span>
          <!-- <span class="sortinfo" v-if="sort === tableName">
              <span v-if="sort.up">▲</span>
              <span v-else>▼</span>
            </span> -->
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, idx) in viewData" :key="idx">
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
    tables: Array,
    viewData: Array,
  },
};
</script>
