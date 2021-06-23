export default {
  data: () => ({
    page: 1,
    maxViewElems: 10,

    allData: [],
  }),
  methods: {
    paginationLeft() {
      if (this.page > 1) --this.page;
    },
    paginationRight() {
      if (this.page < this.maxPage) ++this.page;
    },
    changePage(page) {
      this.page = page;
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
