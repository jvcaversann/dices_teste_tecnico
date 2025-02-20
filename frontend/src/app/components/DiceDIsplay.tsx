interface DiceDisplayProps {
  result: number | string;
  isRolling: boolean;
}

export function DiceDisplay({ result, isRolling }: DiceDisplayProps) {
  return (
    <div className="w-16 h-16 bg-gray-700 rounded flex items-center justify-center text-xl font-bold border-2 border-amber-400">
      {isRolling ? "🎲" : result}
    </div>
  );
}
