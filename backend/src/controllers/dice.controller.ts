import { Request, Response } from "express";
import { DiceService } from "../services/dice.service";

const handleRoll = async (req: Request, res: Response) => {
  const { diceSides } = req.body;

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

export const DiceController = {
  handleRoll,
};
