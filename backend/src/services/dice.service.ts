import { DiceRollModel } from "../models/dice.model";

export const DiceService = {
  rollDice: async (diceSides: number) => {
    if (
      !diceSides ||
      typeof diceSides !== "number" ||
      diceSides <= 0 ||
      !Number.isInteger(diceSides)
    ) {
      throw new Error("Número de lados inválido");
    }

    const result = Math.floor(Math.random() * diceSides) + 1;
    return await DiceRollModel.createRoll(diceSides, result);
  },

  getDiceHistory: async (diceSides: number) => {
    if (
      !diceSides ||
      typeof diceSides !== "number" ||
      diceSides <= 0 ||
      !Number.isInteger(diceSides)
    ) {
      throw new Error("Número de lados inválido");
    }

    return await DiceRollModel.getRollHistory(diceSides);
  },

  deleteRoll: async (rollId: number) => {
    if (
      !rollId ||
      typeof rollId !== "number" ||
      rollId <= 0 ||
      !Number.isInteger(rollId)
    ) {
      throw new Error("ID da rolagem inválido");
    }

    return await DiceRollModel.deleteRoll(rollId);
  },
};
