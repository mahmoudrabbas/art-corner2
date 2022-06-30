import express from "express";
import { addProduct, getAllProducts, deleteProduct, deleteAllProducts } from './../controllers/cartController.js';
const router = express.Router();


router.get('/products/:id', getAllProducts);
router.post('/products', addProduct);
router.delete('/products/:id', deleteProduct);
router.delete('/products_all/:id', deleteAllProducts);



export default router;

