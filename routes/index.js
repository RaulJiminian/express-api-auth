import { Router } from "express";
import petsRouter from "./pets.js";
import usersRouter from "./users.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/pets", petsRouter);
router.use("/users", usersRouter);

export default router;
