<template>
  <div class="sidebar">
    <h1>Добавление товара</h1>
    <form>
      <div class="form-control">
        <label for="name">Наименование товара</label>
        <input
          id="name"
          type="text"
          placeholder="Введите наименование товара"
        >
      </div>
      <div class="form-control">
        <label for="description">Описание товара</label>
        <textarea
          id="description"
          type="text"
          placeholder="Введите описание товара"
        />
      </div>
      <div class="form-control">
        <label for="link">Ссылка на изображение товара</label>
        <input id="link" type="text" placeholder="Введите ссылку">
      </div>
      <div class="form-control">
        <label for="price">Цена товара</label>
        <input id="price" type="number" placeholder="Введите цену">
      </div>
      <button type="submit">
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 332px;
  min-width: 332px;
  margin-right: 16px;
}
h1 {
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3f3f3f;
  margin-bottom: 16px;
}
form {
  padding: 24px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
.form-control {
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
}
</style>
