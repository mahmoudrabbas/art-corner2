import express from "express";
import { deleteOrder, getOrder, getOrders, makeOrder, accept, reject } from './../controllers/ordersControllers.js';

const router = express.Router();


router.get('/', getOrders);
router.get('/:id', getOrder);
router.post('/', makeOrder);
router.delete('/:id', deleteOrder);
router.patch('/accept/:id', accept);
router.patch('/reject/:id', reject);

export default router;

