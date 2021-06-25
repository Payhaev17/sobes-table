<template>
  <div class="personcard scale-transition">
    <div class="personcard__title">
      <span>
        Выбран пользователь
        <b>{{ person.firstName + " " + person.lastName }}</b>
      </span>
    </div>
    <p>Описание:</p>
    <textarea
      class="personcard__description"
      :value="person.description || 'Empty'"
    >
    </textarea>
    <div class="personcard__address">
      <p>
        Адрес проживания: <b>{{ person.address.streetAddress || "Empty" }}</b>
      </p>
      <p>
        Город: <b>{{ person.address.city || "Empty" }}</b>
      </p>
      <p>
        Провинция/штат: <b>{{ person.address.state || "Empty" }}</b>
      </p>
      <p>
        Индекс: <b>{{ person.address.zip || "Empty" }}</b>
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
  padding: 0.5em 1em;
  margin-bottom: 1em;
  box-shadow: 0px 3px 5px grey;
}
.personcard__title {
  font-size: 16px;
  text-align: center !important;
}
.personcard__description {
  max-width: 100%;
  min-width: 100%;
  height: 50px;
  padding: 0.5em;
  outline: none;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0px 2px 3px grey;
}
</style>
