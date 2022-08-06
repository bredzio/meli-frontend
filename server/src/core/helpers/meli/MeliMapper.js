import ItemModel from '../../features/items/models/ItemModel.js';

class MeliMapper{
    mapGetSearchByResponse({
        filters,
        results
    }){
        return {
            categories: filters[0] ? filters[0].values[0].path_from_root.map(c => c.name) : [],  
            items: results ? results.map(item => this.responseWrapperItemsWrapper(item)): [],
        };
    }

    responseWrapperItemsWrapper = (data) => {
        const itemResult = ItemModel.ItemsBySearchRs(data);
        return itemResult.item;
    };


}

export default MeliMapper;