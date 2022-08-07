import Router from 'express';
import { getItemsByQuery, getItemById } from '../controllers/ItemController.js';

const router = Router();

router.get('/items', getItemsByQuery);
router.get('/items/:id', getItemById);

export default router;