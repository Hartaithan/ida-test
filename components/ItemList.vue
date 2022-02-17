<template>
  <div class="item-list">
    <Loader v-if="isLoading" />
    <template v-else>
      <Item v-for="item in items" :key="item.id" :item="item" />
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
    isLoading: true
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
        this.isLoading = false
      } else {
        this.$store.commit('loadFromLocalStorage', [])
      }
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.item-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
p {
  margin-top: 16px;
  width: 100%;
  text-align: center;
}
</style>
