interface RollButtonProps {
  onClick: () => void;
  disabled: boolean;
  isRolling: boolean;
}

export function RollButton({ onClick, disabled, isRolling }: RollButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded 
        transition-all duration-200 hover:scale-[1.02] active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        shadow-md hover:shadow-lg shadow-gray-900/30"
    >
      {isRolling ? "Rolando..." : "Rolar Dado"}
    </button>
  );
}
