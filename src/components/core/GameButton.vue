<script setup>

</script>

<template>
  <button class="game-button">
    <slot />
  </button>
</template>

<style lang="scss">
.game-button {
  @apply px-4 py-2 border border-black rounded-sm
}
</style>