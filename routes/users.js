import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.get("/sign-token", controllers.signToken);
router.post('/verify-token', controllers.verifyToken);
router.post('/sign-up', controllers.signUp);
router.post('/sign-in', controllers.signIn);

export default router;
