<template>
  <div class="mymodal" :class="{ mymodal_active: active }">
    <div class="mymodal__content">
      <a class="mymodal__closebtn" @click="$emit('closeEmit')">
        <i class="material-icons teal-text text-2">close</i>
      </a>
      <div class="mymodal__content__title">Добавить пользователя</div>
      <form class="col s12" @submit.prevent="addPerson">
        <div class="row">
          <div class="input-field col s6">
            <input
              id="first_name"
              type="text"
              :class="{ invalid: !validFirstName }"
              v-model.trim="form.firstName"
            />
            <label for="first_name">FirstName</label>
          </div>
          <div class="input-field col s6">
            <input
              id="last_name"
              type="text"
              :class="{ invalid: !validLastName }"
              v-model.trim="form.lastName"
            />
            <label for="last_name">LastName</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="email"
              type="email"
              v-model.trim="form.email"
              :class="{ invalid: !validEmail }"
            />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="tel"
              type="tel"
              :class="{ invalid: !validPhone }"
              placeholder="(XXX)XXX-XXXX"
              v-model.trim="form.phone"
              v-maska="'(###)###-####'"
            />
            <label for="tel">Phone</label>
          </div>
        </div>
        <div class="right-align">
          <button
            type="submit"
            class="waves-effect waves-light btn"
            :class="{ disabled: !validAll }"
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ValidatorMixin from "@/mixins/validator.mixin.js";

export default {
  props: { active: Boolean },
  mixins: [ValidatorMixin],
  data: () => ({
    form: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  }),
  methods: {
    addPerson() {
      if (this.validAll) {
        this.$emit("addPersonEmit", { ...this.form });

        this.clearForm();
      }
    },
    clearForm() {
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
      this.form.phone = "";
    },
  },
  computed: {
    validFirstName() {
      return this.nameValid(this.form.firstName);
    },
    validLastName() {
      return this.lastNameValid(this.form.lastName);
    },
    validEmail() {
      return this.emailValid(this.form.email);
    },
    validPhone() {
      return this.phoneValid(this.form.phone);
    },
    validAll() {
      return (
        this.nameValid(this.form.firstName) &&
        this.lastNameValid(this.form.lastName) &&
        this.emailValid(this.form.email) &&
        this.phoneValid(this.form.phone)
      );
    },
  },
};
</script>

<style scoped>
.mymodal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
}
.mymodal_active {
  transform: scale(1, 1);
  animation: scale linear 0.3s;
}
.mymodal__content {
  padding: 2em;
  background: white;
  border-radius: 5px;
  position: relative;
}
.mymodal__closebtn {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1em;
  margin-right: 1em;
  cursor: pointer;
  text-decoration: none;
}
.mymodal__content__title {
  margin-bottom: 1em;
}

@keyframes scale {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
</style>
