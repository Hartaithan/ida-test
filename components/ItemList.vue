<template>
  <div class="item-list">
    <Item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
export default {
  name: 'ItemListComponent',
  computed: {
    items () {
      return this.$store.state.list
    }
  }
}
</script>

<style lang="scss" scoped>
.item-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
