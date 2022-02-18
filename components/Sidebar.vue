<template>
  <div class="sidebar" :class="{ isOpen: isOpen }">
    <div class="sidebar__header">
      <h1>Добавление товара</h1>
      <ToggleSidebar />
    </div>
    <Form />
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
  computed: {
    isOpen () {
      return this.$store.state.sidebarIsOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 332px;
  min-width: 332px;
  height: fit-content;
  margin-right: 16px;
  position: sticky;
  top: -35px;
  &__header {
    display: flex;
    justify-content: space-between;
  }
}
h1 {
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3f3f3f;
  margin-bottom: 16px;
}

@media (min-width: 1921px) {
}

@media (max-width: 1400px) {
}

@media (max-width: 1200px) {
}

@media (max-width: 992px) {
  .sidebar {
    position: fixed;
    height: 100%;
    top: 0;
    left: -332px;
    z-index: 9999;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    &__header {
      padding: 24px 24px 0 24px;
    }
    &.isOpen {
      left: 0;
    }
  }
  h1 {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
}

@media (max-width: 576px) {
}
</style>
