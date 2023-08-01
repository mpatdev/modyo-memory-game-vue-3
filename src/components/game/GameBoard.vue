<script setup>
import GameCard from '@/components/game/GameCard.vue'
import GameButton from '@/components/core/GameButton.vue'
import useModyoApi from '@/composables/useModyoApi'
import useCardGame from '@/composables/useCardGame'
import useScoreStore from '@/store/score'
import { watch } from 'vue'
import confetti from '@/utils/confetti'

defineProps({
  player: {
    type: String,
    default: ''
  }
})
const { updateStats, setGameover } = useScoreStore()
const { images, refresh } = useModyoApi()
const { cards, 
  shuffleCards, 
  flipCard, 
  isFlipped,
  isFound,
  stats,
  gameover
} = useCardGame(images)

async function startGame() {
  await refresh()
  shuffleCards()
}


watch(() => gameover.value, (val) => {
  if(val) {
    confetti()
  }
  setGameover(val)
})

watch(() => stats.tries,() => {
  updateStats(stats)
}, { deep: true })
</script>

<template>
  <div class="game-board">
    <div
      v-if="cards.length === 0 || gameover"
      class="flex w-full h-full justify-center items-center flex-col gap-4"
    >
      <div v-if="gameover">
        <p class="text-center text-4xl uppercase">
          Congratulations, {{ player }}!
        </p>
      </div>
      <GameButton @click="startGame">
        Start Game
      </GameButton>
    </div>
    <div
      v-if="cards.length > 0 && !gameover"
      class="grid md:grid-cols-5 md:grid-rows-4 grid-cols-4 gap-4 h-full"
    >
      <GameCard
        v-for="card in cards"
        :key="card.id"
        :item="card"
        :is-flipped="isFlipped(card)"
        :is-found="isFound(card)"
        @click="() => flipCard(card)"
      />
    </div>
  </div>
</template>

<style lang="scss">
.game-board {
  @apply flex-auto;
  max-height: calc(100% - 100px);
}
</style>