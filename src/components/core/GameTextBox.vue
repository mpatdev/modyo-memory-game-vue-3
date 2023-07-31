<script setup>
import useInput from '@/composables/useInput'

const emit = defineEmits(['update:modelValue'])

const { model } = useInput({ emit })
</script>

<template>
  <input
    v-model="model"
    class="game-text-box"
  >
</template>

<style>
.game-text-box {
    @apply border-b border-gray-400 outline-none focus:border-violet w-full text-secondary;
}
</style>