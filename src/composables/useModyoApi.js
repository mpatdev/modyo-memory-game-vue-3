import { getImages } from '@/utils/modyoApi'
import { ref } from 'vue'

export default function useModyoApi() {
    const images = ref([])
    
    const refresh = async () => {
        const getImagesResponse = await getImages()

        images.value = getImagesResponse.entries.map(entry => {
            const { fields } = entry
            const filterKeys = ['alt_text', 'title', 'url']
            return {
                ...entry.meta,
                ...filterKeys.reduce((accumulator, key) => {
                    accumulator[key] = fields.image[key]

                    return accumulator
                }, {})
            }
        })
    }

    return {
        images,
        refresh
    }
}