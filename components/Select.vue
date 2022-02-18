<template>
  <div class="select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected.label }}
    </div>
    <div class="items" :class="{ hidden: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        class="item"
        @click="
          selected = option;
          open = false;
          $emit('input', option.value);
        "
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: Object,
      required: false,
      default: null
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
          ? this.options[0].value
          : null,
      open: false
    }
  },
  mounted () {
    this.$emit('input', this.selected)
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 148px;
  text-align: left;
  outline: none;
  height: 36px;
  align-self: flex-end;
  & > .selected {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 12px;
    line-height: 15px;
    color: #b4b4b4;
    padding-left: 16px;
    cursor: pointer;
    user-select: none;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
    border-radius: 4px;
    &.open {
      border-radius: 6px 6px 0px 0px;
      &:after {
        transform: rotate(315deg);
      }
    }
    &:after {
      position: absolute;
      top: 45%;
      right: 16px;
      transform: translateY(-50%);
      content: "";
      display: inline-block;
      width: 5px;
      height: 5px;
      border-right: 1px solid #b4b4b4;
      border-top: 1px solid #b4b4b4;
      transform: rotate(135deg);
      transform-origin: 3px 3px;
      transition: all 0.2s ease-out;
    }
  }
  & > .items {
    color: #b4b4b4;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    position: absolute;
    background-color: #fffefb;
    top: 40px;
    left: 0;
    right: 0;
    z-index: 1;
    & > .item {
      display: flex;
      align-items: center;
      height: 28px;
      color: #b4b4b4;
      padding-left: 16px;
      cursor: pointer;
      user-select: none;
      font-size: 12px;
      line-height: 15px;
      &:hover {
        color: #fffefb;
        background-color: #b4b4b4;
      }
    }
  }
}

.hidden {
  display: none;
}
</style>
