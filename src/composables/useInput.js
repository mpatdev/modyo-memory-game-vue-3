import { ref,watch, defineEmits } from 'vue'

export default function useInput() {
    const emit = defineEmits(['update:modelValue'])
    const model = ref('')

    watch(model.value, () => {
        emit('update:modelValue', model.value)
    })

    return {
        model
    }
}