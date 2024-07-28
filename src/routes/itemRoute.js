import express from 'express';
import { getItems, createItem, getItem, updateItem, deleteItem } from '../controllers/itemController';

const router = express.Router();

router.get('/items', getItems);
router.post('/items', createItem);
router.get('/items/:id', getItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

export default router;