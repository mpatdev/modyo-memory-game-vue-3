import { afterAll, afterEach, beforeEach, describe, expect, it } from "vitest"
import { rest } from "msw"
import { setupServer } from 'msw/node'
import modyo from '@test/mocks/modyo'
import useModyoApi  from '@/composables/useModyoApi'
import useCardGame from "@/composables/useCardGame"
import sleep from '@/utils/sleep'
import { ref } from 'vue'


const images = modyo

export const restHandlers = [
    rest.get('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(images))
    })
  ]
  const server = setupServer(...restHandlers)

describe('useCardGame', () => {
    let imagesFromApi = ref([])
    
    beforeEach(async () => {
        location.replace(`http://localhost`)

        const { images, refresh } = useModyoApi()

        await refresh()

        imagesFromApi.value = images.value
    })
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())

    it('Init Card Game', async () => {
        const { cards, shuffleCards } = useCardGame(imagesFromApi)

        shuffleCards()

        expect(cards.value.length).toBe(imagesFromApi.value.length * 2)
    })

    it('Found a card | Is Flipped and founded | Stats Updated', async () => {
        const { cards, shuffleCards, flipCard, isFlipped, currentFlipped, isFound, stats } = useCardGame(imagesFromApi)

        shuffleCards()

        const [firstCard] = cards.value

        flipCard(firstCard)

        expect(isFlipped(firstCard)).toBe(true)
        expect(currentFlipped.value.length).toBe(1)

        const similarCard = cards.value.find(card => card.uuid === firstCard.uuid && card.id !== firstCard.id)

        flipCard(similarCard)

        expect(isFlipped(similarCard)).toBe(true)
        expect(currentFlipped.value.length).toBe(2)

        await sleep(300)

        expect(isFound(firstCard)).toBe(true)

        expect(stats.tries.value).toBe(1)
        expect(stats.hits.value).toBe(1)
        expect(stats.fails.value).toBe(0)
    })

    it('Game Over and reset', async () => {
        const { cards, shuffleCards, flipCard, isFound, gameover, stats } = useCardGame(imagesFromApi)

        shuffleCards()

        let currentIndex = 0

        expect(gameover.value).toBe(false)

        do {
            
            const card = cards.value[currentIndex]

            if(!isFound(card)) {
                flipCard(card)

                const similarCard = cards.value.find(crd => crd.uuid === card.uuid && crd.id !== card.id)

                flipCard(similarCard)

                await sleep(100)
            }

            currentIndex += 1
        } while (!gameover.value);

        expect(gameover.value).toBe(true)

        expect(stats.hits.value).toBe(10)
        shuffleCards()

        expect(stats.hits.value).toBe(0)


    })
})