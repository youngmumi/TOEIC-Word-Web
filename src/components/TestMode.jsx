import React, { useState } from "react";
import wordList from "../data/wordList";
import "../styles/TestMode.css"

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
    <div className="test-container">
      <p className="test-question">
        {index + 1}. {currentWord.english}
      </p>
      <div>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleSelect(choice)}
            className={`test-choice ${
              showAnswer
                ? choice === currentWord.korean
                  ? "correct"
                  : choice === selected
                  ? "wrong"
                  : ""
                : ""
            }`}
            disabled={showAnswer}
          >
            {choice}
          </button>
        ))}
      </div>
      {showAnswer && (
        <div className="test-answer">
          <p>정답: <strong>{currentWord.korean}</strong></p>
          <button onClick={nextQuestion} className="test-next-btn">다음</button>
        </div>
      )}
      <p className="test-score">점수: {score}</p>
    </div>
  );
};

export default TestMode;