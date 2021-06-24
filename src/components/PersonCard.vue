<template>
  <div class="personcard">
    <div class="personcard__title">
      <span>
        Выбран пользователь
        <b>{{ person.firstName + " " + person.lastName }}</b>
      </span>
    </div>
    <p>Описание:</p>
    <p class="personcard__description">
      {{ person.description }}
    </p>
    <div class="personcard__line"></div>
    <div class="personcard__address">
      <p>
        Адрес проживания: <b>{{ person.address.streetAddress }}</b>
      </p>
      <p>
        Город: <b>{{ person.address.city }}</b>
      </p>
      <p>
        Провинция/штат: <b>{{ person.address.state }}</b>
      </p>
      <p>
        Индекс: <b>{{ person.address.zip }}</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: Object,
  },
};
</script>

<style scoped>
.personcard {
  margin-top: 2em;
  text-align: left;
  border-radius: 5px;
  padding: 1em;
  margin-bottom: 1em;
  box-shadow: 0px 3px 5px grey;
}
.personcard__title {
  font-size: 16px;
  text-align: center !important;
}
.personcard__line {
  width: 100%;
  height: 1px;
  background: grey;
}
</style>
