import axios from 'axios';
import APIUrlBuilder from '../http/APIUrlBuilder.js';
import MeliMapper from './MeliMapper.js';

class MeliService {
    constructor({ APIPath = 'ML', root = 'MLA'}) {
        this.http = axios.create();
        this.builder = new APIUrlBuilder();
        this.MeliMapper = new MeliMapper();
        this.APIPath = APIPath;
        this.root = root;
    }

    async getSearch({q, limit = 4}) {
        try {
            const url = this.builder.createUrl(this.APIPath, `/sites/${this.root}/search`);
            const response = await this.http.get(url, {
                params: {q,	limit}
            });

            return this.MeliMapper.mapGetSearchByResponse(response.data);
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

export default new MeliService({});