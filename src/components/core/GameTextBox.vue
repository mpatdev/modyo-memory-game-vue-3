<script setup>
import useInput from '@/composables/useInput'

const { model } = useInput()
</script>

<template>
  <input
    v-model="model"
    class="game-text-box"
  >
</template>

<style>
.game-text-box {
    @apply border-b border-gray-400 outline-none focus:border-blue-300 w-full;
}
</style>