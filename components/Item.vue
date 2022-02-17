<template>
  <div class="item">
    <object class="item__img" :data="item.link">
      <img
        class="item__img"
        :src="require('~/assets/placeholder.jpg')"
        alt="image not found"
      >
    </object>
    <!-- <img class="item__img" :src="item.link" alt="item pic" /> -->
    <div class="item__info">
      <div class="item__name">
        {{ item.name }}
      </div>
      <div class="item__description">
        {{ item.description || "Описание отсутствует" }}
      </div>
      <div class="item__price">
        {{ item.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemComponent',
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 332px;
  height: fit-content;
  color: #3f3f3f;
  margin-right: 16px;
  margin-bottom: 0;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
  }
  &:nth-child(3n) {
    margin-right: 0;
    margin-bottom: 16px;
  }
  &__img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  &__info {
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 215px;
  }
  &__name {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 16px;
  }
  &__description {
    flex-grow: 1;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 32px;
  }
  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    &:after {
      content: " руб.";
    }
  }
}
</style>
