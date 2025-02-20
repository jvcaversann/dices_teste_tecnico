interface RollResult {
  result: number;
  createdAt: string;
  diceSides: number;
}

interface RollHistoryProps {
  history?: RollResult[];
  selectedDice: number | null;
  isLoading?: boolean;
  isError?: boolean;
}

export function RollHistory({
  history,
  selectedDice,
  isLoading,
  isError,
}: RollHistoryProps) {
  const filteredHistory = history
    ? history.filter((roll) => selectedDice && roll.diceSides === selectedDice)
    : [];

  return (
    <div className="bg-gray-700 rounded p-2 py-2 h-64 w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col">
      <h2 className="text-lg font-bold text-amber-300 text-center">
        Histórico
      </h2>

      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <div className="w-6 h-6 border-4 border-t-amber-400 border-gray-600 rounded-full animate-spin"></div>
        </div>
      ) : isError ? (
        <p className="text-red-400 text-center text-sm">
          Erro ao carregar histórico.
        </p>
      ) : filteredHistory.length > 0 ? (
        filteredHistory.map((roll, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-600 w-full text-sm text-center"
          >
            <div>
              Dado: <strong>D{roll.diceSides}</strong>
            </div>
            <div>
              Resultado: <strong>{roll.result}</strong>
            </div>
            <span className="text-gray-400 text-xs">
              Horário do Sorteio:{" "}
              {new Date(roll.createdAt).toLocaleTimeString("pt-BR", {
                timeZone: "America/Sao_Paulo",
              })}
            </span>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-center text-sm">
          Histórico de sorteio aparecerá aqui
        </p>
      )}
    </div>
  );
}
