<template>
  <PersonsDashboard />
</template>

<script>
import PersonsDashboard from "@/components/PersonsDashboard.vue";

export default {
  name: "App",
  components: {
    PersonsDashboard,
  },
};
</script>

<style scope>
body {
  width: 900px;
  margin: 0 auto !important;
}

#app {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
</style>
