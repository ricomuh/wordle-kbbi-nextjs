import { useState } from "react";
import KeyboardItem from "./keyboardItem";

const Keyboard = ({ setCharater }: any) => {
  const keys: string[] = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  const slices = [0, 10, 19, 26];

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {slices.map((slice, index) => (
        <div className="flex justify-center items-center gap-2">
          {keys.slice(slice, slices[index + 1]).map((char, keyIndex) => (
            <>
              {index === 2 && keyIndex === 0 && (
                <button className="bg-gray-200 rounded-md px-4 h-10 flex justify-center items-center">
                  Enter
                </button>
              )}
              <KeyboardItem
                text={char}
                onClick={() => setCharater(index, keyIndex, char)}
              />
              {index === 2 && keyIndex === 6 && (
                <button className="bg-gray-200 rounded-md px-4 h-10 flex justify-center items-center">
                  Backspace
                </button>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
