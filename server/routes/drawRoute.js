import express from "express";
import { getAllDrawings, getDrawing, createDrawing, updateDrawing, deleteDrawing,getAllUserDrawings,getfirstThreeUserDrawings} from "../controllers/drawingController.js";

const router = express.Router();


router.get('/',getAllDrawings);

router.get('/:id',getDrawing);

router.get('/all_drawings/:id',getAllUserDrawings);

router.get('/user_drawings/:id',getfirstThreeUserDrawings);

router.post('/',createDrawing);

router.patch('/:id',updateDrawing);

router.delete('/:id',deleteDrawing);



export default router;

