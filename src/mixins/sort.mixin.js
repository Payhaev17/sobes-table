export default {
  data: () => ({
    up: true, // true - сортировка вверх, false - сортировка вниз
  }),
  methods: {
    changeSort(array, key) {
      this.up = !this.up;

      if (typeof array[0][key] === "string") {
        this.sortByAlphabet(array, key);
      } else {
        this.sortByNum(array, key);
      }
    },
    sortByNum(array, key) {
      if (this.up) {
        array.sort((prev, next) => prev[key] - next[key]);
      } else {
        array.sort((prev, next) => next[key] - prev[key]);
      }
    },
    sortByAlphabet(array, key) {
      if (this.up) {
        array.sort((prev, next) => prev[key].localeCompare(next[key]));
      } else {
        array.sort((prev, next) => next[key].localeCompare(prev[key]));
      }
    },
  },
};
