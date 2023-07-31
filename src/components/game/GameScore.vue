<script setup>
// imports
import useScoreStore from '@/store/score'
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { formatTime } from '@/utils/time'

// Props
defineProps({
  player: {
    type: String,
    default: ''
  }
})
const { tries, hits, fails, time, history } = storeToRefs(useScoreStore())

const timeFormated = computed(() => formatTime(time.value))
</script>

<template>
  <div class="game-score">
    <div>
      <h1 class="font-medium text-lg uppercase">
        Hi, {{ player }}
      </h1>
    </div>

    <div class="flex gap-4">
      <div class="w-8/12">
        <div>
          <p>
            Tries: {{ tries }} | Hits: {{ hits }} | Fails: {{ fails }} | Time: {{ timeFormated }}
          </p>
        </div>
      </div>

      <div
        v-if="history.tries !== 0"
        class="w-4/12 flex justify-end"
      >
        Best score: Hits: {{ history.hits }} | Fails: {{ history.fails }} | Tries: {{ history.tries }} | {{ history.time }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.game-score {
  @apply bg-secondary p-4 rounded border border-violet;
}
</style>