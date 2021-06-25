<template>
  <div class="mymodal" :class="{ mymodal_active: active }">
    <div class="mymodal__content">
      <a class="mymodal__closebtn" @click="$emit('closeEmit')">
        <i class="material-icons teal-text text-2">close</i>
      </a>
      <div class="mymodal__content__title">Добавить пользователя</div>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input
              id="first_name"
              type="text"
              class="validate"
              v-model="firstName"
            />
            <label for="first_name">FirstName</label>
          </div>
          <div class="input-field col s6">
            <input
              id="last_name"
              type="text"
              class="validate"
              v-model="lastName"
            />
            <label for="last_name">LastName</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" v-model="email" />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="tel"
              type="tel"
              class="validate"
              pattern="2[0-9]{3}-[0-9]{3}"
              v-model="phone"
            />
            <label for="tel">Phone</label>
          </div>
        </div>
        <div class="right-align">
          <a class="waves-effect waves-light btn">Добавить</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: { active: Boolean },
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  }),
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
