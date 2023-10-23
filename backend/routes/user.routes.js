import express from 'express';
import { test, updateUser } from '../controllers/users.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.patch('/update/:id', verifyToken, updateUser);

export default router;