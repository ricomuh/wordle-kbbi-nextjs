"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import Keyboard from "@/components/keyboard";

const Main = () => {
  const [words, setWords] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [clue, setClue] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [answer, setAnswer] = useState<string[]>([]);

  useEffect(() => {
    axios.get("/api/randomWord").then((res) => {
      setAnswer(res.data.answer.split(""));
    });
  }, []);

  const setCharater = (character: string) => {
    setWords((prev) => {
      const newWords = [...prev];
      if (character === "Backspace" && currentColumn > 0) {
        newWords[currentRow][currentColumn - 1] = "";
        setCurrentColumn(currentColumn - 1);
      } else if (character === "Enter" && currentRow < 4) {
        handleEnter();
      } else if (currentColumn < 5) {
        setCurrentColumn(currentColumn + 1);
        newWords[currentRow][currentColumn] = character;
      }
      return newWords;
    });
  };

  const handleEnter = () => {
    setCurrentRow(currentRow + 1);
    setCurrentColumn(0);
    const word = words[currentRow].join("");
    axios
      .get(`https://new-kbbi-api.up.railway.app/cari/${word}`)
      .then((res) => {
        // If the word is correct
        if ((res.data.status = true)) {
          // for each word in the row
          words[currentRow].forEach((w, index) => {
            // copy the clue
            let _clue = [...clue];
            // if the word is correct
            if (w === answer[index]) {
              // set the clue to correct
              _clue[currentRow][index] = "correct";
            } else {
              // else, check if the word is almost correct
              let i = 0;
              while (i < word.length) {
                if (w === answer[i]) {
                  _clue[currentRow][i] = "almost";
                  break;
                }
                i++;
              }
            }
            // console.log(_clue[currentRow].join(""), words.join(""));
            console.log({
              clue: _clue[currentRow].join(""),
              word: words[currentRow].join(""),
              answer: answer.join(""),
            });
            setClue(_clue);
          });
        }
      });
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        {words.map((word, index) =>
          word.map((w, i) => (
            <div
              className={`${
                clue[index][i] === "almost"
                  ? `bg-yellow-500`
                  : clue[index][i] === "correct" && `bg-green-500`
              } border-2 border-gray-300 rounded-md aspect-[3/2.5] flex justify-center items-center font-bold text-2xl`}
              key={i}
            >
              {w}
            </div>
          ))
        )}
      </div>
      <Keyboard setCharater={setCharater} />
    </div>
  );
};

export default Main;
