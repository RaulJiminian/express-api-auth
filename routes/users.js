import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.get("/sign-token", controllers.signToken);
router.post('/verify-token', controllers.verifyToken);
router.post('/sign-up', controllers.signUp);

export default router;
