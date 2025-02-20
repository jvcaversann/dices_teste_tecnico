import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const DiceRollModel = {
  createRoll: async (diceSides: number, result: number) => {
    return await prisma.diceRoll.create({
      data: {
        diceSides,
        result,
      },
    });
  },

  getRollHistory: async (diceSides: number) => {
    return await prisma.diceRoll.findMany({
      where: { diceSides },
      orderBy: { createdAt: "desc" },
    });
  },
};
