<template>
  <transition name="slide-fade">
    <div v-if="alertIsOpen" class="alert">
      Товар успешно добавлен
      <svg
        class="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
        <path
          class="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AlertComponent',
  computed: {
    alertIsOpen () {
      return this.$store.state.alertIsOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  display: flex;
  bottom: 24px;
  right: 24px;
  width: fit-content;
  padding: 10px 16px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 18px;
  z-index: 20;
}
.checkmark {
  margin-left: 14px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
  &__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #7ac142;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  &__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }
  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes scale {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #7ac142;
    }
  }
}
.slide-fade {
  &-enter-active {
    transition: all 0.3s ease;
  }
  &-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  &-enter,
  &-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
}
</style>
