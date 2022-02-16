<template>
  <div class="item">
    <img class="item__img" :src="getImage(item.img)">
    <div class="item__info">
      <div class="item__name">
        {{ item.name }}
      </div>
      <div class="item__description">
        {{ item.description }}
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
  },
  methods: {
    getImage (img) {
      if (img.includes('http')) {
        return require(img)
      }
      return require(`../assets/${img}.png`)
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
    padding: 16px;
  }
  &__name {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 16px;
  }
  &__description {
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
