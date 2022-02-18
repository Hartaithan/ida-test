<template>
  <button class="toggle" @click="toggleSidebar()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      style="fill: #000000"
    >
      <path
        d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ToggleSidebarComponent',
  methods: {
    toggleSidebar () {
      this.$store.commit('showSidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle {
  display: none;
  height: 36px;
  width: 36px;
  background: transparent;
  svg {
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 1921px) {
}

@media (max-width: 1400px) {
}

@media (max-width: 1200px) {
}

@media (max-width: 992px) {
  .toggle {
    display: block;
  }
}

@media (max-width: 768px) {
}

@media (max-width: 576px) {
}
</style>
