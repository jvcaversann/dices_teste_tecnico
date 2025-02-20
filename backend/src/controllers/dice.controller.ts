import { Request, Response } from "express";
import { DiceService } from "../services/dice.service";

const handleRoll = async (req: Request, res: Response) => {
  const diceSides = Number(req.body.diceSides);

  try {
    const roll = await DiceService.rollDice(diceSides);
    res.json({
      result: roll.result,
      timestamp: roll.createdAt,
    });
  } catch (error) {
    console.error("Erro ao rolar dado:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    res.status(400).json({ error: errorMessage });
  }
};

const handleGetHistory = async (req: Request, res: Response) => {
  const diceSides = Number(req.params.diceSides);

  try {
    const history = await DiceService.getDiceHistory(diceSides);
    res.json(history);
  } catch (error) {
    console.error("Erro ao buscar histórico:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    res.status(500).json({ error: errorMessage });
  }
};

export const DiceController = {
  handleRoll,
  handleGetHistory,
};
