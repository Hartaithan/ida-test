<template>
  <transition name="fade" mode="out-in">
    <Loader v-if="isLoading" />
    <p v-else-if="items.length === 0">
      Товар еще не добавлены
    </p>
    <div v-else class="item-list">
      <Select
        :options="options"
        :default="options[0]"
        @input="handleSelect($event)"
      />
      <transition-group class="item-list__wrapper" name="list" tag="div">
        <Item
          v-for="item in items"
          :key="item.id"
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
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
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
    transform: translateY(10px);
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
</style>
