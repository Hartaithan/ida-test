<template>
  <transition name="fade" mode="out-in">
    <Loader v-if="isLoading" />
    <div v-else-if="items.length === 0" class="item-list">
      <div class="item-list__header">
        <ToggleSidebar />
      </div>
      <p>Товары еще не добавлены</p>
    </div>
    <div v-else class="item-list">
      <div class="item-list__header">
        <ToggleSidebar />
        <Select
          :options="options"
          :default="options[0]"
          @input="handleSelect($event)"
        />
      </div>
      <transition-group class="item-list__wrapper" name="list" tag="div">
        <Item
          v-for="item in items"
          :key="`${item.id}${item.name}`"
          class="list-item"
          :item="item"
        />
      </transition-group>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ItemListComponent',
  data: () => ({
    isLoading: true,
    options: [
      { value: 0, label: 'По умолчанию' },
      { value: 1, label: 'По возрастанию цены' },
      { value: 2, label: 'По убыванию цены' },
      { value: 3, label: 'По наименованию' }
    ]
  }),
  computed: {
    items () {
      return this.$store.state.list
    }
  },
  mounted () {
    const perisistedList = JSON.parse(window.localStorage.getItem('list'))
    setTimeout(() => {
      if (perisistedList) {
        this.$store.commit('loadFromLocalStorage', perisistedList)
      } else {
        this.$store.commit('loadFromLocalStorage', [])
      }
      this.isLoading = false
    }, 1000)
  },
  methods: {
    handleSelect (sortType) {
      if (typeof sortType !== 'number') {
        return
      }
      this.$store.commit('sortBy', sortType)
    }
  }
}
</script>

<style lang="scss" scoped>
.item-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  &__header {
    display: flex;
    justify-content: flex-end;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 16px;
  }
}
p {
  margin-top: 16px;
  width: 100%;
  text-align: center;
}
.list {
  &-move {
    transition: transform 0.5s;
  }
  &-item {
    transition: all 1s;
    display: inline-block;
  }
  &-enter-active,
  &-leave-active {
    transition: all 0.5s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
}
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

@media (min-width: 1921px) {
}

@media (max-width: 1400px) {
}

@media (max-width: 1200px) {
  .item-list {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
  }
}

@media (max-width: 992px) {
  .item-list {
    &__header {
      justify-content: space-between;
    }
  }
}

@media (max-width: 768px) {
  .item-list {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
    }
  }
}

@media (max-width: 576px) {
}
</style>
