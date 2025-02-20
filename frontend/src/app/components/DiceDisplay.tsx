interface DiceDisplayProps {
  result: number | string;
  isRolling: boolean;
}

export function DiceDisplay({ result, isRolling }: DiceDisplayProps) {
  return (
    <div
      className="w-16 h-16 bg-gray-700 rounded flex items-center justify-center text-xl font-bold border-2 border-amber-400
      transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30"
    >
      <span className={`${isRolling ? "animate-spin" : "animate-none"}`}>
        {isRolling ? "🎲" : result}
      </span>
    </div>
  );
}
