import { DiceController } from "./../controllers/dice.controller";
import { Router } from "express";

const router = Router();

router.post("/roll", DiceController.handleRoll);
router.get("/history/:diceSides", DiceController.handleGetHistory);
router.delete("/roll/:id", DiceController.handleDeleteRoll);

export default router;
