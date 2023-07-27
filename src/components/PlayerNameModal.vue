<script setup>
import GameModal from '@/components/core/GameModal.vue'
import GameTextBox from '@/components/core/GameTextBox.vue'
import GameButton from '@/components/core/GameButton.vue'

import { ref } from 'vue'

const playerName = ref('') 
</script>

<template>
  <GameModal>
    <div class="flex w-full h-full justify-center items-center">
      <div class="w-full">
        <div class="mb-4">
          Hi, enter your name {{ playerName }}
        </div>
        <div>
          <GameTextBox
            v-model="playerName"
            placeholder="Enter your name"
          />
        </div>
        <div class="flex justify-end mt-4">
          <GameButton>
            Start
          </GameButton>
        </div>
      </div>
    </div>
  </GameModal>
</template>