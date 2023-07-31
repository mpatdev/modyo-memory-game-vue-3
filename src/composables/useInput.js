import { ref,watch } from 'vue'

export default function useInput({ emit }) {
    const model = ref('')

    watch(model, () => {
        emit('update:modelValue', model.value)
    })

    return {
        model
    }
}