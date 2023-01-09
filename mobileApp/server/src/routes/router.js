import { Router } from "express";
import { registerUser, findUser, test, getUsers } from "../controllers/userController.js";

const router = Router();

router.get('/', test)
router.get('/findAllUsers', getUsers)
router.get('/findUser/:email', findUser)
router.post('/register', registerUser);

export default router