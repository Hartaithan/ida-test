<template>
  <div class="item-list">
    <Loader v-if="isLoading" />
    <template v-else>
      <Select
        :options="options"
        :default="options[0]"
        class="select"
        @input="handleSelect($event)"
      />
      <div class="item-list__wrapper">
        <Item v-for="item in items" :key="item.id" :item="item" />
      </div>
      <p v-if="items.length === 0">
        Товар еще не добавлены
      </p>
    </template>
  </div>
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
</style>
