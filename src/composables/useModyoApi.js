import { getImages } from '@/utils/modyoApi'
import { ref } from 'vue'

export default function useModyoApi() {
    const images = ref([])

    const pageOrigins = {}
    
    const refresh = async () => {
        const page = Math.floor(Math.random() * 2) + 1
        let imagesFromResponse = []

        if(page in pageOrigins) {
            imagesFromResponse = pageOrigins[pageOrigins]
        } else {
            const imagesFromApi = await getImages({ per_page: 10, page })

            imagesFromResponse = imagesFromApi.entries
        }

        

        images.value = imagesFromResponse.map(entry => {
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