import shuffle from '@/utils/shuffle'
import { describe, expect, it } from 'vitest'

describe('Shuffle Util', () => {
    const items = ['A', 'B', 'C' , 'D', 'E']
    const itemsShuffled = shuffle([...items])
    it('Array is not same', () => {
        expect(itemsShuffled.toString()).not.toBe(items.toString())
    })

    it('Array has same length', () => {
        expect(itemsShuffled.length).toBe(items.length)
    })
})