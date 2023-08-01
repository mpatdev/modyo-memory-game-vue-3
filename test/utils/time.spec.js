import { describe, expect, it } from "vitest";
import { formatTime } from '@/utils/time'

describe('Time Util', () => {
    it('Format time', () => {
        expect(formatTime(64)).toBe('01:04')
        expect(formatTime(69)).toBe('01:09')
        expect(formatTime(0)).toBe('00:00')
        expect(formatTime(201)).toBe('03:21')
    })

    it.fails('Format time Type not supported', () => {
        expect(formatTime('ABC')).toBe('00:00')
    })
})