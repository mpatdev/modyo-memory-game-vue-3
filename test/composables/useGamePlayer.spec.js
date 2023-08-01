import { describe, expect, it } from "vitest"
import useGamePlayer from '@/composables/useGamePlayer'

describe('UseGamePlayer', () => {
    it('Use Game Player', () => {
        const { player } = useGamePlayer()
        expect(player.value).toBe('')
        player.value = 'John Doe'
        expect(player.value).toBe('John Doe')
    })
})