interface RollResult {
  result: number;
  timestamp: string;
  sides: number;
}

interface RollHistoryProps {
  history: RollResult[];
  selectedDice: number | null;
}

export function RollHistory({ history, selectedDice }: RollHistoryProps) {
  const filteredHistory = history.filter((roll) => roll.sides === selectedDice);

  return (
    <div className="bg-gray-700 rounded p-2 h-48 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full">
      <h2 className="text-base font-bold mb-2 text-amber-300 text-center">
        Histórico
      </h2>
      {filteredHistory.length > 0 ? (
        [...filteredHistory].reverse().map((roll, index) => (
          <div key={index} className="text-sm py-1 border-b border-gray-600">
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
  );
}
