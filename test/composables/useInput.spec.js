import { describe, expect, it } from "vitest"
import useInput from '@/composables/useInput'
import { defineEmits } from 'vue'

describe('useInput', () => {
    it('Use Inputs Without emits', () => {
        const { model } = useInput()
        expect(model.value).toBe('')
        model.value = 'Test'
        expect(model.value).toBe('Test')
    })

    it('Use Inputs With emits', () => {
        const emit = defineEmits(['update:modelValue'])
        const { model } = useInput({ emit })
        expect(model.value).toBe('')
        model.value = 'Test'
        expect(model.value).toBe('Test')
    })
})