import Api from '@/utils/api'

const modyoApi = new Api('https://fed-team.modyo.cloud')

export const getImages = (options = {per_page: 10, page: 1}) => {
    const query = Object.keys(options).map(key => `${key}=${options[key]}`).join('&')

    return modyoApi.get(`/api/content/spaces/animals/types/game/entries?${query}`)
}

export default modyoApi
