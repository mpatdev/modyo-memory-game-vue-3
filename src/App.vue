<script setup>
import { GameBoard,GameScore } from '@/components'
</script>

<template>
  <div
    role="main"
    class="container mx-auto"
  >
    <div>
      <GameScore />
    </div>
    <div>
      <GameBoard />
    </div>
  </div>
</template>
