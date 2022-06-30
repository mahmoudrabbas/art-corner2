import express from "express";
import { getBooks,getBook,createNewBook, deleteBook } from './../controllers/bookController.js';

const router = express.Router();


router.get('/',getBooks);
router.get('/:id',getBook);
router.post('/',createNewBook);
router.delete('/:id',deleteBook);



export default router;

