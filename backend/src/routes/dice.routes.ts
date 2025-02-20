import { DiceController } from "./../controllers/dice.controller";
import { Router } from "express";

const router = Router();

router.post("/roll", DiceController.handleRoll);
router.get("/history/:diceSides", DiceController.handleGetHistory);

export default router;
