<script setup>
import { GameBoard,GameScore, PlayerNameModal } from '@/components'
import useGamePlayer from '@/composables/useGamePlayer'

const { player } = useGamePlayer()

</script>

<template>
  <div
    role="main"
    class="container mx-auto"
  >
    <div v-if="player">
      <div>
        <GameScore />
      </div>
      <div>
        <GameBoard />
      </div>
    </div>
    <div v-else>
      <PlayerNameModal />
    </div>
  </div>
</template>
