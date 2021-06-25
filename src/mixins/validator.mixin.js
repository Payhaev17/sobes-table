export default {
  methods: {
    nameValid(name) {
      return /^[a-z ,.'-]+$/i.test(name);
    },
    lastNameValid(lastName) {
      return /^[a-z ,.'-]+$/i.test(lastName);
    },
    emailValid(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    phoneValid(phone) {
      return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone);
    },
  },
};
