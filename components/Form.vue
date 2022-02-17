<template>
  <form>
    <div class="input-group">
      <label for="name">Наименование товара</label>
      <input
        id="name"
        type="text"
        placeholder="Введите наименование товара"
        required
      >
    </div>
    <div class="input-group">
      <label for="description">Описание товара</label>
      <textarea
        id="description"
        type="text"
        placeholder="Введите описание товара"
      />
    </div>
    <div class="input-group">
      <label for="link">Ссылка на изображение товара</label>
      <input id="link" type="text" placeholder="Введите ссылку" required>
    </div>
    <div class="input-group">
      <label for="price">Цена товара</label>
      <input id="price" type="number" placeholder="Введите цену" required>
    </div>
    <button type="submit">
      Добавить товар
    </button>
  </form>
</template>

<script>
export default {
  name: 'FormComponent'
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
  label {
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
    margin-bottom: 4px;
  }
  input,
  textarea {
    width: 100%;
    height: 36px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    &::placeholder {
      font-size: 12px;
      line-height: 15px;
      color: #b4b4b4;
    }
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
  textarea {
    min-height: 108px;
    resize: none;
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
