import { describe, afterAll, afterEach, expect, it, beforeEach } from "vitest"
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import modyo from '@test/mocks/modyo'
import useModyoApi  from '@/composables/useModyoApi'

const images = modyo

export const restHandlers = [
    rest.get('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10&page=1', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(images))
    }),
    rest.get('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10&page=2', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(images))
    }),
  ]
  const server = setupServer(...restHandlers)

describe('UseModyoApi', () => {
    beforeEach(() => {
        location.replace(`http://localhost`);  
    })
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())

    it('Call Modyo Api', async () => {
        const { images, refresh } = useModyoApi()

        expect(images.value.length).toBe(0)

        await refresh()

        expect(images.value.length).toBe(10)
    })
})