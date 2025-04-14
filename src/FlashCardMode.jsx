import React, { useState } from "react";
import wordList from "./wordList";
import "./FlashCardMode.css"; // 별도 CSS 파일에서 스타일 불러옴

const FlashCardMode = () => {
  const [index, setIndex] = useState(0);

  const getRandomIndex = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * wordList.length);
    } while (newIndex === index);
    return newIndex;
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % wordList.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + wordList.length) % wordList.length);
  };

  const randomCard = () => {
    setIndex(getRandomIndex());
  };

  return (
    <div className="container">
      <h1 className="title">📘 토익 영단어</h1>
      <Flashcard word={wordList[index]} />
      <div className="button-group">
        <button onClick={prevCard}>⬅️ 이전</button>
        <button onClick={nextCard}>다음 ➡️</button>
        <button onClick={randomCard}>🔀 랜덤</button>
      </div>
    </div>
  );
};

const Flashcard = ({ word }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={toggleFlip}>
      <div className="flashcard-inner">
        <div className="flashcard-front">{word.english}</div>
        <div className="flashcard-back">{word.korean}</div>
      </div>
    </div>
  );
};

export default FlashCardMode;



