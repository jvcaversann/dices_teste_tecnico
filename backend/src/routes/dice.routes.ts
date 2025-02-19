import { Router } from "express";
import { DiceController } from "../controllers/dice.controller";

const router = Router();

router.post("/roll", DiceController.handleRoll);

export default router;
