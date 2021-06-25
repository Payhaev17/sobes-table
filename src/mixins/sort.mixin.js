export default {
  data: () => ({
    sortKey: "id",
    sortUp: true,
  }),
  methods: {
    changeSort(array, key, sortBy) {
      this.sortKey = key;
      this.sortUp = !this.sortUp;

      switch (sortBy) {
        case "number":
          this.sortByNum(array);
          break;
        case "alphabet":
          this.sortByAlphabet(array);
          break;
      }
    },
    sortByNum(array) {
      if (this.sortUp) {
        array.sort((prev, next) => next[this.sortKey] - prev[this.sortKey]);
      } else {
        array.sort((prev, next) => prev[this.sortKey] - next[this.sortKey]);
      }
    },
    sortByAlphabet(array) {
      if (this.sortUp) {
        array.sort((prev, next) =>
          next[this.sortKey].localeCompare(prev[this.sortKey])
        );
      } else {
        array.sort((prev, next) =>
          prev[this.sortKey].localeCompare(next[this.sortKey])
        );
      }
    },
  },
};
