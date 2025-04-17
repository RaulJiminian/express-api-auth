import { Router } from "express";
import petsRouter from "./pets.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/pets", petsRouter);

export default router;
