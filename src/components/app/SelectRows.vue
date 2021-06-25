<template>
  <div class="selectrows">
    <a
      class="waves-effect waves-light btn red lighten-2"
      @click="$emit('selectEmit', 1000)"
    >
      Большой объем - 1000
    </a>
    <a class="waves-effect waves-light btn" @click="$emit('selectEmit', 32)">
      Маленький объем - 32
    </a>
  </div>
</template>

<style scoped>
.selectrows {
  margin-top: 1em;
}
.btn {
  margin-right: 1em;
}
</style>
