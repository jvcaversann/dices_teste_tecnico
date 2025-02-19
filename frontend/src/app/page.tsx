"use client";
import { useState } from "react";
import { DiceButton } from "./components/DiceButton";
import { useRollDiceMutation } from "./services/diceRequests";

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
    if (selectedDice) {
      rollMutation.mutate(selectedDice, {
        onSuccess: (data) => {
          setHistory((prev) => [...prev, { ...data, sides: selectedDice }]);
        },
      });
    }
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
        <div className="w-16 h-16 bg-gray-700 rounded flex items-center justify-center text-xl font-bold border-2 border-amber-400">
          {rollMutation.isPending ? "🎲" : rollMutation.data?.result || "-"}
        </div>

        <div className="bg-gray-700 rounded p-2 h-48 overflow-y-auto w-full">
          <h2 className="text-base font-bold mb-2 text-amber-300 text-center">
            Histórico
          </h2>
          {history.length > 0 ? (
            history
              .filter((roll) => roll.sides === selectedDice)
              .map((roll, index) => (
                <div
                  key={index}
                  className="text-sm py-1 border-b border-gray-600"
                >
                  D{roll.sides} - {roll.result} -
                  <span className="text-gray-400 ml-2 text-xs">
                    {new Date(roll.timestamp).toLocaleTimeString("pt-BR", {
                      timeZone: "America/Sao_Paulo",
                    })}
                  </span>
                </div>
              ))
          ) : (
            <p className="text-gray-400 text-center text-sm mt-4">
              Histórico de rolagens aparecerá aqui
            </p>
          )}
        </div>
      </div>

      <button
        onClick={handleRoll}
        disabled={!selectedDice || rollMutation.isPending}
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {rollMutation.isPending ? "Rolando..." : "Rolar Dado"}
      </button>

      {rollMutation.isError && (
        <p className="text-red-400 mt-2">Erro ao rolar o dado!</p>
      )}
    </div>
  );
}
