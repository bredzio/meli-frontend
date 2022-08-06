import Router from 'express';
import { getItemsByQuery } from '../controllers/ItemController.js';

const router = Router();

router.get('/items', getItemsByQuery);

export default router;