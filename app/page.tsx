"use client";
import { useEffect, useState } from "react";

import Keyboard from "@/components/keyboard";

const Main = () => {
  const [words, setWords] = useState<string[][]>([[], [], [], [], []]);

  useEffect(() => {
    // set the words state to blank 2d array 5*5
    const setBlankWords: string[][] = [[], [], [], [], []];
    setBlankWords.forEach((row, rowIndex) => {
      for (let i = 0; i < 5; i++) {
        row.push("");
      }
    });
    setWords(setBlankWords);
  }, []);

  const setCharater = (row: number, column: number, character: string) => {
    setWords((prev) => {
      const newWords = [...prev];
      newWords[row][column] = character;
      return newWords;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-4/12 my-4 flex-col justify-between gap-10">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold">Wordle KBBI</h1>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {words.map((word, index) =>
            word.map((w, i) => (
              <div className="border-2 border-gray-300 rounded-md aspect-square flex justify-center items-center font-bold text-2xl">
                {w}
              </div>
            ))
          )}
        </div>
        <Keyboard setCharater={setCharater} />
      </div>
    </div>
  );
};

export default Main;
