import { defineStore } from 'pinia';
import { reactive, ref, watch } from 'vue';
import sleep from '@/utils/sleep'
const useScoreStore = defineStore('score', () => {
    const tries = ref(0)
    const hits = ref(0)
    const fails = ref(0)
    const time = ref(0)

    const gameover = ref(false)

    const history = reactive({
        hits: 0,
        tries: 0,
        fails: 0,
        time: 0
    })

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
    })

    function setGameover(gameoverState) {
        this.gameover = gameoverState

        this.time = 0
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
        history,
        gameover,
        setGameover
    }
})

export default useScoreStore