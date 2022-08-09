import environmentDev from '../environments/environment.dev.js'
import environmentProd from '../environments/environment.prod.js'

class ApiFetchService {
  constructor (APIPath) {
    this.PATH = APIPath
  }

  async getResults (search) {
    const url = `${this.PATH}/api/items?q=${encodeURI(search)}`
    const resp = await fetch(url)
    return resp.json()
  }

  async getItemDetails (id) {
    const url = `${this.PATH}/api/items/${id}`
    const resp = await fetch(url)
    return resp.json()
  }
}

let apiPath = environmentProd.APIBaseURL
if (import.meta.env.MODE === 'development') {
  apiPath = environmentDev.APIBaseURL
}

export default new ApiFetchService(apiPath)
