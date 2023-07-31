import { onMounted, ref, watchEffect } from 'vue'

export default function useGamePlayer() {
    const player = ref('')

    onMounted(() => {
        player.value = localStorage.getItem('player') || ''
    })

    watchEffect(() => {
        if(player.value) {
            localStorage.setItem('player', player.value)
        }
    })


    return {
        player
    }
}