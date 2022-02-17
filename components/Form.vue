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
        @input="validateInput('name')"
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
        @input="validateInput('link')"
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
        type="text"
        placeholder="Введите цену"
        @input="onPriceChange($event)"
      >
      <div v-if="errors.price" class="input-group__feedback">
        {{ errors.price }}
      </div>
    </div>
    <button type="submit" :disabled="!formIsValid()">
      Добавить товар
    </button>
  </form>
</template>

<script>
export default {
  name: 'FormComponent',
  data: () => ({
    form: {
      name: '',
      description: '',
      link: '',
      price: ''
    },
    errors: {}
  }),
  methods: {
    handleSubmit () {
      this.$store.commit('addItem', this.form)
    },
    formIsValid () {
      return (
        this.form.name.length > 0 &&
        this.form.link.length > 0 &&
        this.form.price.length > 0 &&
        Object.keys(this.errors).length === 0
      )
    },
    validateInput (id) {
      const errors = { ...this.errors }
      if (this.form[id].length === 0) {
        errors[id] = 'Поле является обязательным'
      } else if (
        id === 'link' &&
        !this.form.link.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g)
      ) {
        errors.link =
          "В поле 'Ссылка на изображение товара' должны быть ссылка на изображение"
      } else {
        delete errors[id]
      }
      this.errors = errors
    },
    onPriceChange (e) {
      const value = e.target.value
      this.form.price = value
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ' ')
      this.validateInput('price')
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
    &[for]:not([for="description"])::after {
      content: "";
      display: inline-block;
      width: 4px;
      height: 4px;
      background: #ff8484;
      border-radius: 4px;
      position: absolute;
      margin-left: 2px;
    }
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
    background: #eeeeee !important;
  }
  &:hover,
  &:focus {
    background: #486f42;
  }
}
</style>
