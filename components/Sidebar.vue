<template>
  <div class="sidebar">
    <h1>Добавление товара</h1>
    <Form />
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
  height: fit-content;
  margin-right: 16px;
  position: sticky;
  top: 16px;
  left: 0;
}
h1 {
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3f3f3f;
  margin-bottom: 16px;
}
</style>
