import { DiceRollModel } from "../models/dice.model";

const rollDice = async (diceSides: number) => {
  if (
    !diceSides ||
    typeof diceSides !== "number" ||
    diceSides <= 0 ||
    !Number.isInteger(diceSides)
  ) {
    throw new Error("Número de lados inválido");
  }

  const result = Math.floor(Math.random() * diceSides) + 1;

  await new Promise((resolve) => setTimeout(resolve, 300));

  return await DiceRollModel.createRoll(diceSides, result);
};

const getDiceHistory = async (diceSides: number) => {
  if (
    !diceSides ||
    typeof diceSides !== "number" ||
    diceSides <= 0 ||
    !Number.isInteger(diceSides)
  ) {
    throw new Error("Número de lados inválido");
  }

  await new Promise((resolve) => setTimeout(resolve, 300));

  return await DiceRollModel.getRollHistory(diceSides);
};

const deleteRoll = async (rollId: number) => {
  if (
    !rollId ||
    typeof rollId !== "number" ||
    rollId <= 0 ||
    !Number.isInteger(rollId)
  ) {
    throw new Error("ID da rolagem inválido");
  }

  return await DiceRollModel.deleteRoll(rollId);
};

export const DiceService = {
  rollDice,
  getDiceHistory,
  deleteRoll,
};
