import exprss from 'express'
const router = exprss.Router();

import auth from "../middlewares/auth.js";


import { getAllEvents, getEvent, addEvent, acceptEvent, deleteEvent,joinEvent } from '../controllers/eventController.js';

router.get('/', getAllEvents);
router.get('/:id', getEvent);
router.post('/', addEvent);
router.patch('/:id', acceptEvent);
router.patch('/join/:id', auth ,joinEvent);
router.delete('/:id', deleteEvent);

export default router;