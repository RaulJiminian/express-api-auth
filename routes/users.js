import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.get("/sign-token", controllers.signToken);

export default router;
