const KeyboardItem = ({ text, onClick }: { text: string; onClick: any }) => {
  return (
    <button
      className="bg-gray-200 rounded-md w-10 h-10 flex justify-center items-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default KeyboardItem;
