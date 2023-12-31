export default function shuffle(cards) {
    let currentIndex = cards.length
    let randomIndex

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)

        currentIndex--

        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]]
    }

    return cards
}