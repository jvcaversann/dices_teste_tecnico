interface DiceButtonProps {
  sides: number;
  isSelected: boolean;
  onClick: (sides: number) => void;
}

export const DiceButton = ({ sides, isSelected, onClick }: DiceButtonProps) => {
  return (
    <button
      onClick={() => {
        onClick(sides);
      }}
      className={`w-16 h-16 rounded-lg flex items-center justify-center text-xl font-bold
        transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          isSelected
            ? "bg-amber-500 border-2 border-amber-200 shadow-lg shadow-amber-500/40 animate-pulse"
            : "bg-gray-700 hover:bg-gray-600 hover:scale-105 hover:shadow-md hover:shadow-amber-500/20"
        }`}
    >
      D{sides}
    </button>
  );
};
