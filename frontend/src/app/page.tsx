"use client";
import { useEffect, useState } from "react";
import { DiceButton } from "./components/DiceButton";
import {
  useDiceHistoryQuery,
  useRollDiceMutation,
  useDeleteRollMutation,
} from "./services/diceRequests";
import { RollHistory } from "./components/RollHistory";
import { RollButton } from "./components/RollButton";
import { DiceDisplay } from "./components/DiceDisplay";

export default function Home() {
  const [selectedDice, setSelectedDice] = useState<number | null>(2);

  const rollMutation = useRollDiceMutation();
  const deleteMutation = useDeleteRollMutation();

  const {
    data: history,
    isLoading,
    isError,
  } = useDiceHistoryQuery(selectedDice);

  const handleRoll = () => {
    if (!selectedDice) return;
    rollMutation.mutate(selectedDice);
  };

  const handleDeleteRoll = async (rollId: number) => {
    try {
      await deleteMutation.mutateAsync(rollId);
    } catch (error) {
      console.error("Falha ao deletar sorteio:", error);
    }
  };

  useEffect(() => {
    if (selectedDice) {
      useDiceHistoryQuery(selectedDice);
    }
  }, [selectedDice]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-amber-400 animate-fade-in-down">
        Sorteio de Dados
      </h1>

      <div className="flex gap-3 mb-6 overflow-x-auto w-full justify-center scroll-smooth pb-2">
        {[2, 4, 6, 8, 10, 12, 20].map((diceSides) => (
          <DiceButton
            key={diceSides}
            sides={diceSides}
            isSelected={selectedDice === diceSides}
            onClick={() => setSelectedDice(diceSides)}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-md mb-6">
        <DiceDisplay
          result={rollMutation.data?.result || "-"}
          isRolling={rollMutation.isPending}
        />

        <RollHistory
          history={history}
          selectedDice={selectedDice}
          isLoading={isLoading}
          isError={isError}
          onDelete={handleDeleteRoll}
          isDeleting={deleteMutation.isPending}
        />
      </div>

      <RollButton
        onClick={handleRoll}
        disabled={!selectedDice || rollMutation.isPending}
        isRolling={rollMutation.isPending}
      />

      {rollMutation.isError && (
        <p className="text-red-400 mt-2 animate-shake">Erro ao rolar o dado!</p>
      )}
    </div>
  );
}
