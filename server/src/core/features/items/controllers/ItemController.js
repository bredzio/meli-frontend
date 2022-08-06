import response from 'express';
import ItemService from '../services/ItemService.js';

export const getItemsByQuery = async (req, res = response ) => {
    try {
        const items = await ItemService.getItemsByQuery(req.query);
        const author = res.author;

        res.json({
            author,
            ...items
        });
        
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.toString()
        });
    }
};
