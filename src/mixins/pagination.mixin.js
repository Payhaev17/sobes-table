export default {
  data: () => ({
    page: 1,
    maxViewElems: 10,

    allData: [],
  }),
  methods: {
    changePage(page) {
      this.page = page;
    },
    paginationLeft() {
      if (this.page > 1) --this.page;
    },
    fastLeft() {
      this.page = 1;
    },
    paginationRight() {
      if (this.page < this.maxPage) ++this.page;
    },
    fastRight() {
      this.page = this.maxPage;
    },
  },
  computed: {
    viewData() {
      const start = (this.page - 1) * this.maxViewElems;
      const end = start + this.maxViewElems;

      return this.allData.slice(start, end);
    },
    maxPage() {
      return Math.ceil(this.allData.length / this.maxViewElems);
    },
    getPages() {
      const pages = [];

      for (let i = 0; i < this.maxPage; ++i) {
        const pageNum = i + 1;

        if (Math.abs(pageNum - this.page) <= 3) {
          pages.push(pageNum);
        }
      }

      return pages;
    },
  },
};
