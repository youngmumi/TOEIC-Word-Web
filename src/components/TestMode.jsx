import React, { useState, useMemo } from "react";
import wordList from "../data/wordList";
import "../styles/TestMode.css";

const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const TestMode = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const currentWord = wordList[index];

  const choices = useMemo(() => {
    const wrongChoices = shuffle(wordList)
      .filter((w) => w.korean !== currentWord.korean)
      .slice(0, 3)
      .map((w) => w.korean);
    return shuffle([currentWord.korean, ...wrongChoices]);
  }, [index, currentWord.korean]);

  const handleSelect = (choice) => {
    if (showAnswer) return;
    setSelected(choice);
    setShowAnswer(true);
    if (choice === currentWord.korean) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % wordList.length);
  };

  const getChoiceClass = (choice) => {
    if (!showAnswer) return "";
    if (choice === currentWord.korean) return "correct";
    if (choice === selected) return "wrong";
    return "";
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
            className={`test-choice ${getChoiceClass(choice)}`}
            disabled={showAnswer}
            aria-disabled={showAnswer}
          >
            {choice}
          </button>
        ))}
      </div>
      {showAnswer && (
        <div className="test-answer" aria-live="polite">
          <p>
            정답: <strong>{currentWord.korean}</strong>
          </p>
          <button onClick={nextQuestion} className="test-next-btn" autoFocus>
            다음
          </button>
        </div>
      )}
      <p className="test-score">점수: {score}</p>
    </div>
  );
};

export default TestMode;
