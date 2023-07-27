import Api from '@/utils/api'

const modyoApi = new Api('https://fed-team.modyo.cloud')

export const getImages = (maxImages = 10) => modyoApi.get(`/api/content/spaces/animals/types/game/entries?per_page=${maxImages}`)

export default modyoApi
