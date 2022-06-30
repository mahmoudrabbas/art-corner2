import express from "express";
import { getMails, getMail, deleteMail, makeMail } from './../controllers/mailController.js';

const router = express.Router();


router.get('/', getMails);
router.get('/:id', getMail);
router.post('/', makeMail);
router.delete('/:id', deleteMail);



export default router;

