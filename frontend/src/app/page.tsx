"use client";
import { useState } from "react";
import { DiceButton } from "./components/DiceButton";
import { useRollDiceMutation } from "./services/diceRequests";
import { RollHistory } from "./components/RollHistory";

import { RollButton } from "./components/RollButton";
import { DiceDisplay } from "./components/DiceDIsplay";

interface RollResult {
  result: number;
  timestamp: string;
  sides: number;
}

export default function Home() {
  const [selectedDice, setSelectedDice] = useState<number | null>(null);
  const [history, setHistory] = useState<RollResult[]>([]);

  const rollMutation = useRollDiceMutation();

  const handleRoll = () => {
    if (!selectedDice) return;
    rollMutation.mutate(selectedDice, {
      onSuccess: (data) =>
        setHistory((prev) => [...prev, { ...data, sides: selectedDice }]),
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-amber-400">
        Rolagem de Dados
      </h1>

      <div className="flex gap-3 mb-6 overflow-x-auto w-full justify-center">
        {[2, 4, 6, 8, 10, 12, 20].map((sides) => (
          <DiceButton
            key={sides}
            sides={sides}
            isSelected={selectedDice === sides}
            onClick={() => setSelectedDice(sides)}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-md mb-6">
        <DiceDisplay
          result={rollMutation.data?.result || "-"}
          isRolling={rollMutation.isPending}
        />
        <RollHistory history={history} selectedDice={selectedDice} />
      </div>

      <RollButton
        onClick={handleRoll}
        disabled={!selectedDice || rollMutation.isPending}
        isRolling={rollMutation.isPending}
      />

      {rollMutation.isError && (
        <p className="text-red-400 mt-2">Erro ao rolar o dado!</p>
      )}
    </div>
  );
}
