import { ref, watchEffect } from 'vue'
import shuflle from '@/utils/shuflle'

export default function useCardGame(images) {
    const cards = ref([])
    const currentFlipped = ref([])
    const foundCards = ref([])
    const stats = {
        tries: ref(0),
        hits: ref(0),
        mistakes: ref(0)
    }
    let autoFlipTimeOut = null

    function shuffleCards() {
        const imagesDuplicated = [
            ...images.value.map(image => ({...image, id: `${image.uuid}|A`})),
            ...images.value.map(image => ({...image, id: `${image.uuid}|B`})),
        ]
        cards.value = shuflle(imagesDuplicated)
    }

    function flipCard(card) {
        if(currentFlipped.value.includes(card.id)) return
        if(foundCards.value.includes(card.uuid)) return


        if(currentFlipped.value.length === 2) {
            cleanAutoFlip()
            currentFlipped.value = []
        }

        currentFlipped.value.push(card.id)
    }

    function isFound(card) {
        return foundCards.value.includes(card.uuid)
    }

    function isFlipped(card) {
        return currentFlipped.value.includes(card.id) || isFound(card)
    }

    function cleanAutoFlip() {
        if(autoFlipTimeOut) {
            clearTimeout(autoFlipTimeOut)
        }
    }

    function setAutoFlip() {
        autoFlipTimeOut = setTimeout(() => {
            currentFlipped.value = []
        }, 2000)
    }

    function setStats(isHit) {
        stats.tries.value += 1
        if(isHit) {
            stats.hits.value += 1
        } else {
            stats.mistakes.value += 1
        }
    }

    function validateMatch(flippedCards) {
        const cardsFlipped = flippedCards
            .value
            .map(card => card.split('|')[0])

        const [firstCardFlipped] = cardsFlipped

        let isHit = false

        if(cardsFlipped.every(card => card === firstCardFlipped)) {
            foundCards.value.push(firstCardFlipped)

            isHit = true
        }

        setStats(isHit)

        setAutoFlip()
    }

    function onMatch(callback) {
        if(!callback) return
        callback()
    }

    watchEffect(() => {
        if(currentFlipped.value.length === 2) {
            validateMatch(currentFlipped)
        }
    })
    

    return {
        cards, shuffleCards, flipCard, isFlipped,
        currentFlipped, isFound, onMatch, stats
    }
}