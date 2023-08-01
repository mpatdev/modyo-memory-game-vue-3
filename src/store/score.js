import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import sleep from '@/utils/sleep'
const useScoreStore = defineStore('score', () => {
    const tries = ref(0)
    const hits = ref(0)
    const fails = ref(0)
    const time = ref(0)

    const gameover = ref(false)

    async function gameTick() {
        if(gameover.value) return
        await sleep(1000)
        
        time.value += 1
        
        return gameTick()
    }

    watch(() => tries.value, (newValue, oldValue) => {
        if(oldValue === 0 && newValue === 1) {
            
            gameTick()
        }

        if(newValue === 0) {
            time.value = 0
        }
    })

    function setGameover(gameoverState) {
        this.gameover = gameoverState
    }

    function updateStats({ tries, hits, fails }) {
        this.tries = tries.value
        this.hits = hits.value
        this.fails = fails.value
    }

    return {
        tries,
        hits,
        fails,
        time,
        updateStats,
        gameover,
        setGameover
    }
})

export default useScoreStore