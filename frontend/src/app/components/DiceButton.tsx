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
        ${
          isSelected
            ? "bg-amber-500 border-2 border-amber-200"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
    >
      D{sides}
    </button>
  );
};
