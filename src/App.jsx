import React, { useState } from 'react'
import Flashcard from './components/Flashcard'
import wordList from './data/wordList'

function App() {
  const [index, setIndex] = useState(0)

  const getRandomIndex = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * wordList.length)
    } while (newIndex === index)
    return newIndex
  }

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % wordList.length)
  }

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + wordList.length) % wordList.length)
  }

  const randomCard = () => {
    setIndex(getRandomIndex())
  }

  return (
    <div className="app-container" align="center">
      <h1>📘 토익 영단어</h1>
      <Flashcard word={wordList[index]} />
      <div className="button-group" style={{ marginTop: '3mm' }}>
        <button onClick={prevCard}>이전</button>
        <button onClick={nextCard}>다음</button>
      </div>
      <div className="button-group" style={{ marginTop: '1.5mm' }}>
        <button onClick={randomCard}>랜덤 단어</button>
      </div>
    </div>
  )
}

export default App
