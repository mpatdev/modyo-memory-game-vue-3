import API from '@/utils/Api'
import { describe, expect, it } from 'vitest'

describe('Test API Util', () => {
    let api = null
    it('Init API Class', () => {
        api = new API('https://test.io')
    })

    it('API Class Return subroute', () => {
        const subroute = api.makeUrl('subroute')
        expect(subroute.toString()).toBe('https://test.io/subroute')
    })
})