import React, { useState } from "react";
import wordList from "../data/wordList";
import "../styles/FlashCardMode.css";

const FlashCardMode = () => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % wordList.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + wordList.length) % wordList.length);
  };

  const randomCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * wordList.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <div className="container">
      <h1 className="title">📘 토익 영단어 📘</h1>
      <Flashcard word={wordList[index]} />
      <div className="button-group">
        <button onClick={prevCard} aria-label="이전 단어">⬅️ 이전</button>
        <button onClick={nextCard} aria-label="다음 단어">다음 ➡️</button>
        <button onClick={randomCard} aria-label="랜덤 단어">🔀 랜덤</button>
      </div>
    </div>
  );
};

const Flashcard = ({ word }) => {
  const [flipped, setFlipped] = React.useState(false);

  React.useEffect(() => {
    setFlipped(false);
  }, [word]);

  const toggleFlip = () => setFlipped((f) => !f);

  // 키보드 접근성용 핸들러
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={toggleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-pressed={flipped}
      aria-label={flipped ? `${word.korean} 뜻` : `${word.english} 단어`}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">{word.english}</div>
        <div className="flashcard-back">{word.korean}</div>
      </div>
    </div>
  );
};

export default FlashCardMode;
