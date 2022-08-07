import MeliService from '../../../helpers/meli/MeliService.js';
import ItemModel from '../../../features/items/models/ItemModel.js';


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

export const getItemById = async ({id}) => {
    try {
        const [itemData, descriptionData, currenciesData] = await Promise.all([
            MeliService.getItemById(id),
            MeliService.getItemByDescription(id),
            MeliService.getCurrencies(),
        ]);
    
        const description = descriptionData.plain_text;
        const itemCurrency = currenciesData.filter(c => c.id == itemData.currency_id)[0];
        
        if(!itemCurrency){
            throw Error(`Item with id ${id} not found`);
        }
        
        const decimal_places = itemCurrency.decimal_places;
        const currency_symbol = itemCurrency.symbol;

        const meliItemData = {
            ...itemData,
            decimal_places,
            currency_symbol,
            description,
        };

        return ItemModel.ItemsByIdRs(meliItemData);

    } catch (error) {
        return {
            error: error.toString(),
        };
    }
};

export default {
    getItemsByQuery,
    getItemById
};

