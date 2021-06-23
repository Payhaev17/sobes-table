import { createStore } from "vuex";

import person from "@/store/person.js";

export default createStore({
  modules: {
    person,
  },
});
