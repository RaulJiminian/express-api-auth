import { Router } from "express";
import * as controllers from "../controllers/pets.js";

const router = Router();

router.get("/", controllers.getPets);
router.get("/:petId", controllers.getPet);
router.post("/", controllers.createPet);
router.put("/:petId", controllers.updatePet);
router.delete("/:petId", controllers.deletePet);

export default router;
