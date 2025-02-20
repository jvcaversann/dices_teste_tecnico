import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createRoll = async (diceSides: number, result: number) => {
  return await prisma.diceRoll.create({
    data: {
      diceSides,
      result,
    },
  });
};

const getRollHistory = async (diceSides: number) => {
  return await prisma.diceRoll.findMany({
    where: { diceSides },
    orderBy: { createdAt: "desc" },
  });
};

const deleteRoll = async (id: number) => {
  const existingRoll = await prisma.diceRoll.findUnique({
    where: { id },
  });

  if (!existingRoll) {
    throw new Error("Rolagem não encontrada");
  }

  return await prisma.diceRoll.delete({
    where: { id },
  });
};

export const DiceRollModel = {
  createRoll,
  getRollHistory,
  deleteRoll,
};
