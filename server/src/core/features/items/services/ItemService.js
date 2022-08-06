import MeliService from '../../../helpers/meli/MeliService.js';

export const getItemsByQuery = async ({q}) => {
    try {
        const result = await MeliService.getSearch({q});
        return result;
       
    } catch (error) {
        return {
            error: error.toString(),
        };
    }
};

export default {
    getItemsByQuery,
};

