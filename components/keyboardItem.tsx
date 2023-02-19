const KeyboardItem = ({ text, onClick }: { text: string; onClick?: any }) => {
  return (
    <button
      className="bg-gray-200 rounded-md px-4 h-10 flex justify-center items-center font-semibold"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default KeyboardItem;
