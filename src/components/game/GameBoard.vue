<script setup>
import GameCard from '@/components/game/GameCard.vue'
import useModyoApi from '@/composables/useModyoApi'
import useCardGame from '@/composables/useCardGame'

const { images, refresh } = useModyoApi()
const { cards, 
  shuffleCards, 
  flipCard, 
  isFlipped,
  isFound
} = useCardGame(images)

async function startGame() {
  
  await refresh()

  shuffleCards()

  console.log('Iniciando Juego')
}
</script>

<template>
  <div>
    <div>
      <button @click="startGame">
        Iniciar Juego
      </button>
    </div>
    <div class="grid grid-cols-5 grid-rows-4 gap-4 h-[100dvh]">
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