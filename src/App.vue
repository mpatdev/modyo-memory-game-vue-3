<script setup>
import { GameBoard,GameScore, PlayerNameModal } from '@/components'
import useGamePlayer from '@/composables/useGamePlayer'

const { player } = useGamePlayer()

</script>

<template>
  <div
    role="main"
    class="sm:container sm:mx-auto px-4"
  >
    <div
      v-if="player"
      class="flex flex-col h-[100dvh] gap-4 py-4"
    >
      <GameScore :player="player" />
      <GameBoard :player="player" />
    </div>
    <div v-else>
      <PlayerNameModal v-model="player" />
    </div>
  </div>
</template>

<style lang="scss">
body {
  @apply bg-primary text-white;
}
</style>
