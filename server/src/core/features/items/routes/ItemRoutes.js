import Router from 'express';
import { getItemsByQuery, getItemById } from '../controllers/ItemController.js';
import { check } from 'express-validator';
import { validationMiddleware } from '../../../middlewares/ValidationMiddleware.js';


const router = Router();

router.get('/items', [
    check('q').not().isEmpty().withMessage('Parameter :q cannot be empty'),
    validationMiddleware
],getItemsByQuery);

router.get('/items/:id', [
    check('id').not().isEmpty().withMessage('Parameter :id cannot be empty'),
    validationMiddleware
],getItemById);

export default router;