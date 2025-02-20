interface RollResult {
  id: number;
  result: number;
  createdAt: string;
  diceSides: number;
}

interface RollHistoryProps {
  history?: RollResult[];
  selectedDice: number | null;
  isLoading?: boolean;
  isError?: boolean;
  onDelete?: (rollId: number) => void;
  isDeleting?: boolean;
}

export function RollHistory({
  history,
  selectedDice,
  isLoading,
  isError,
  onDelete,
  isDeleting,
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
        filteredHistory.map((roll) => (
          <div
            key={roll.id}
            className="grid grid-cols-[1fr_1fr_1fr_auto] items-center py-2 border-b border-gray-600 w-full text-sm"
          >
            <div className="text-left">
              <span className="inline-block w-12">Dado:</span>
              <strong>D{roll.diceSides}</strong>
            </div>
            <div className="text-center">
              <span className="inline-block w-16">Resultado:</span>
              <strong className="w-8 inline-block">{roll.result}</strong>
            </div>
            <div className="text-center text-gray-400 text-xs">
              <span className="inline-block w-12">Horário:</span>
              {new Date(roll.createdAt).toLocaleTimeString("pt-BR", {
                timeZone: "America/Sao_Paulo",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="text-right">
              <button
                onClick={() => onDelete?.(roll.id)}
                disabled={isDeleting}
                className="text-red-400 hover:text-red-300 transition-colors ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
                title={isDeleting ? "Excluindo..." : "Excluir sorteio"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
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
