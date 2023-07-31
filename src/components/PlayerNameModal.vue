<script setup>
import GameModal from '@/components/core/GameModal.vue'
import GameTextBox from '@/components/core/GameTextBox.vue'
import GameButton from '@/components/core/GameButton.vue'

import { ref, defineEmits } from 'vue'

const emit = defineEmits([['update:modelValue']])
const playerName = ref('')

function startGame() {
  console.log('Send Start Game')
  emit('update:modelValue', playerName.value)
}
</script>

<template>
  <GameModal>
    <div class="flex w-full h-full justify-center items-center">
      <div class="w-full">
        <div class="mb-4 text-secondary text-lg">
          Hi, Welcome to Game Memory. Please type your name
        </div>
        <div>
          <GameTextBox
            v-model="playerName"
            placeholder="Enter your name"
          />
        </div>
        <div class="flex justify-end mt-4">
          <GameButton
            :disabled="!playerName"
            @click="startGame"
          >
            Start
          </GameButton>
        </div>
      </div>
    </div>
  </GameModal>
</template>