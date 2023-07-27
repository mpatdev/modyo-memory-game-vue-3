export default class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    makeUrl(endpoint) {
        return new URL(endpoint, this.baseUrl)
    }

    get(endpoint) {
        return fetch(this.makeUrl(endpoint)).then((response) => response.json())
    }
}