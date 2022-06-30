import express from "express";
import { getAllreports, makeReport, getReport, deleteReport } from "../controllers/reportController.js";

const router = express.Router();




router.get('/', getAllreports);
router.get('/:id', getReport);
router.post('/', makeReport);
router.delete('/:id', deleteReport);


export default router;

