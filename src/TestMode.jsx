import React, { useState } from "react";
import wordList from "./wordList";

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const TestMode = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const currentWord = wordList[index];
  const choices = shuffle([
    currentWord.korean,
    ...shuffle(wordList)
      .filter((w) => w.korean !== currentWord.korean)
      .slice(0, 3)
      .map((w) => w.korean),
  ]);

  const handleSelect = (choice) => {
    setSelected(choice);
    setShowAnswer(true);
    if (choice === currentWord.korean) setScore(score + 1);
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % wordList.length);
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <p className="text-lg font-semibold mb-4">
        {index + 1}. {currentWord.english}
      </p>
      <div className="space-y-2">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleSelect(choice)}
            className={`w-full p-2 rounded border ${
              showAnswer
                ? choice === currentWord.korean
                  ? "bg-green-200"
                  : choice === selected
                  ? "bg-red-200"
                  : "bg-white"
                : "bg-blue-50 hover:bg-blue-100"
            }`}
            disabled={showAnswer}
          >
            {choice}
          </button>
        ))}
      </div>
      {showAnswer && (
        <div className="mt-4">
          <p>정답: <strong>{currentWord.korean}</strong></p>
          <button
            onClick={nextQuestion}
            className="mt-2 bg-black text-white px-4 py-1 rounded"
          >
            다음
          </button>
        </div>
      )}
      <p className="mt-4">점수: {score}</p>
    </div>
  );
};

export default TestMode;
