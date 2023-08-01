import { createPinia, setActivePinia } from "pinia"
import { beforeEach, describe, expect, it } from "vitest"
import useScoreStore from '@/store/score'
import { ref } from "vue"

describe('Score Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })


    it('Init Score store', () => {
        const scoreStore = useScoreStore()
        expect(scoreStore.tries).toBe(0)
        expect(scoreStore.hits).toBe(0)
        expect(scoreStore.fails).toBe(0)
    })

    it('Stats is updated', () => {
        const scoreStore = useScoreStore()
        const { updateStats } = useScoreStore()

        updateStats({ hits: ref(23), fails: ref(10), tries: ref(14)  })

        expect(scoreStore.tries).toBe(14)
        expect(scoreStore.hits).toBe(23)
        expect(scoreStore.fails).toBe(10)
    })

    it('gameover is updated', () => {
        const scoreStore = useScoreStore()
        const { setGameover } = useScoreStore()

        setGameover(true)

        expect(scoreStore.gameover).toBe(true)
    })
})