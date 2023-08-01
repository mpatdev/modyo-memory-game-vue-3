import { describe, expect, it } from "vitest";
import sleep from '@/utils/sleep'
describe('sleep util', () => {
    it('Sleep is promise', () => {
        expect(sleep(1000) instanceof Promise).toBe(true)
    })
})