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
    "Enter",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "Backspace",
  ];
  const slices = [0, 10, 19, 28];

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {slices.map((slice, index) => (
        <div className="flex justify-center items-center gap-2" key={index}>
          {keys.slice(slice, slices[index + 1]).map((char, keyIndex) => (
            <KeyboardItem
              text={char}
              onClick={() => setCharater(char)}
              key={keyIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
