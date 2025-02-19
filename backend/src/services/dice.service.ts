import { DiceRollModel } from "../models/dice.model";

export const DiceService = {
  rollDice: async (diceSides: number) => {
    if (!diceSides || typeof diceSides !== "number") {
      throw new Error("Número de lados inválido");
    }

    const result = Math.floor(Math.random() * diceSides) + 1;
    const roll = await DiceRollModel.createRoll(diceSides, result);
    return roll;
  },
};
