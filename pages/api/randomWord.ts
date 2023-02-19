import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const words = [
    "mudah",
    "susah",
    "takut",
    "makan",
    "minum",
    "tidur",
    "sudah",
    "malas",
    "marah",
  ];
  res
    .status(200)
    .json({ answer: words[Math.floor(Math.random() * words.length)] });
}
