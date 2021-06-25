export default {
  actions: {
    async findPersons(ctx, rowsQuantity) {
      const res = await fetch(
        `http://www.filltext.com/?rows=${rowsQuantity}&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
      );

      const persons = await res.json();

      ctx.commit("updatePersons", persons);
    },
  },
  mutations: {
    updatePersons(state, persons) {
      state.persons = persons;
    },
  },
  state: {
    persons: [],
  },
  getters: {
    getPersons(state) {
      return state.persons;
    },
  },
};
