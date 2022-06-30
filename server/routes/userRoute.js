import express from "express";
import { register,login,getAllUsers,getUser,settings } from "../controllers/userController.js";

const router = express.Router();




router.get('/',getAllUsers);
router.get('/:id',getUser);



router.post('/register',register);
router.post('/login',login);


router.patch('/settings/:id', settings)


export default router;

