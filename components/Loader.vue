<template>
  <div class="loader">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="
        margin: auto;
        background: rgb(241, 242, 243);
        display: block;
        shape-rendering: auto;
      "
      width="100%"
      height="80px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#707070"
        stroke-width="6"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LoaderComponent'
}
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  margin-top: 16px;
}
</style>
