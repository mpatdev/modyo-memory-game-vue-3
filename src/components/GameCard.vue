<script setup>
import { computed } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  isFlipped: {
    type: Boolean,
    default: false
  },
  isFound: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const altText = computed(() => {
  if(props.item.alt_text) {
    return props.item.alt_text
  }

  return props.item.title
})
</script>

<template>
  <div
    class="game-card overflow-hidden h-full border 
    border-black rounded cursor-pointer"
    :class="{
      'bg-zinc-200 flex items-center justify-center': !isFlipped
    }"
    @click="() => emit('click')"
  >
    <Transition name="flip">
      <div
        v-if="isFlipped"
        class="w-full h-full flex items-center p-2 justify-center"
      >
        <img
          :src="item.url"
          class="h-full w-auto"
          :title="altText"
          :alt="altText"
          :aria-label="altText"
          :role="none"
          :class="{
            'grayscale': isFound
          }"
        >
      </div>
      <div
        v-else
        class="w-full h-full flex items-center justify-center"
      >
        <div class="game-card__center w-20 h-20" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.flip-enter-active {
  transition: all 0.8s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter-from, .flip-leave-from {
  transform: rotateY(180deg);
  opacity: 0;
}

.game-card {
  max-height: calc(25dvh - 1em);

  &__center {
    background-image: url('@/assets/images/card-background.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>