<script>
</script>

<template>
  <div class="game-modal ">
    <div class="game-modal__overlay" />
    <div class="game-modal__body ">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.game-modal {
  @apply fixed inset-0 flex items-center justify-center;

  &__overlay {
    @apply bg-black opacity-70 absolute inset-0 w-full h-full z-[1];
  }

  &__body {
    @apply bg-white p-4 min-w-[450px] min-h-[200px] relative z-[5] flex items-center rounded;
  }
}
</style>