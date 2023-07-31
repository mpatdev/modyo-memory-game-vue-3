<template>
  <button
    role="button"
    class="game-button"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.game-button {
  @apply px-4 py-2 border bg-secondary rounded-sm cursor-pointer uppercase;

  &:disabled {
    @apply opacity-50 cursor-not-allowed;
  }
}
</style>