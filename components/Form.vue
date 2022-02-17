<template>
  <form @submit.prevent="handleSubmit()">
    <div class="input-group">
      <label class="input-group__label" for="name">Наименование товара</label>
      <input
        id="name"
        v-model="form.name"
        class="input-group__input"
        :class="{ invalid: errors.name }"
        type="text"
        placeholder="Введите наименование товара"
        @change="validateInput('name')"
      >
      <div v-if="errors.name" class="input-group__feedback">
        {{ errors.name }}
      </div>
    </div>
    <div class="input-group">
      <label
        class="input-group__label"
        for="description"
      >Описание товара</label>
      <textarea
        id="description"
        v-model="form.description"
        class="input-group__textarea"
        :class="{ invalid: errors.description }"
        type="text"
        placeholder="Введите описание товара"
        @change="validateInput('description')"
      />
      <div v-if="errors.description" class="input-group__feedback">
        {{ errors.description }}
      </div>
    </div>
    <div class="input-group">
      <label
        class="input-group__label"
        for="link"
      >Ссылка на изображение товара</label>
      <input
        id="link"
        v-model="form.link"
        class="input-group__input"
        :class="{ invalid: errors.link }"
        type="text"
        placeholder="Введите ссылку"
        @change="validateInput('link')"
      >
      <div v-if="errors.link" class="input-group__feedback">
        {{ errors.link }}
      </div>
    </div>
    <div class="input-group">
      <label class="input-group__label" for="price">Цена товара</label>
      <input
        id="price"
        v-model="form.price"
        class="input-group__input"
        :class="{ invalid: errors.price }"
        type="number"
        placeholder="Введите цену"
        @change="validateInput('price')"
      >
      <div v-if="errors.price" class="input-group__feedback">
        {{ errors.price }}
      </div>
    </div>
    <button type="submit">
      Добавить товар
    </button>
  </form>
</template>

<script>
export default {
  name: 'FormComponent',
  data () {
    return {
      form: {
        name: '',
        description: '',
        link: '',
        price: null
      },
      errors: {}
    }
  },
  methods: {
    handleSubmit () {
      if (this.validateForm()) {
        alert(JSON.stringify(this.form))
      }
    },
    validateForm () {
      const errors = {}
      if (this.form.name.length === 0) {
        errors.name = "Поле 'Наименование товара' обязательно для заполнения"
      }
      if (this.form.description.length === 0) {
        errors.description =
          "Поле 'Описание товара' обязательно для заполнения"
      }
      if (this.form.link.length === 0) {
        errors.link =
          "Поле 'Ссылка на изображение товара' обязательно для заполнения"
      }
      if (!this.form.price) {
        errors.price = "Поле 'Цена товара' обязательно для заполнения"
      }
      this.errors = errors
      return errors.length === 0
    },
    validateInput (id) {
      const errors = { ...this.errors }
      if (this.form[id].length > 0) {
        delete errors[id]
        this.errors = errors
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  padding: 24px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
.input-group {
  display: flex;
  flex-direction: column;
  &__label {
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
    margin-bottom: 4px;
  }
  &__input,
  &__textarea {
    width: 100%;
    height: 36px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 10px 16px;
    &.invalid {
      border: 1px solid #ff8484;
    }
    &::placeholder {
      font-size: 12px;
      line-height: 15px;
      color: #b4b4b4;
    }
  }
  &__textarea {
    min-height: 108px;
    resize: none;
  }
  &__feedback {
    margin-top: 4px;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #ff8484;
  }
  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
}
button {
  width: 100%;
  height: 36px;
  background: #7bae73;
  border-radius: 10px;
  color: #ffffff;
  &:disabled {
    color: #b4b4b4;
    background: #eeeeee;
  }
  &:hover,
  &:focus {
    background: #486f42;
  }
}
</style>
