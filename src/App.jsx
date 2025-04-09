import React, { useState } from 'react'
import Flashcard from './components/Flashcard'
import wordList from './data/words'

function App() {
  const [index, setIndex] = useState(0)

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % wordList.length)
  }

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + wordList.length) % wordList.length)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-bold mb-6">📘 플래시카드 영단어</h1>
      <Flashcard word={wordList[index]} />
      <div className="flex gap-4 mt-6">
        <button onClick={prevCard} className="px-4 py-2 bg-gray-300 rounded-xl shadow">이전</button>
        <button onClick={nextCard} className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow">다음</button>
      </div>
    </div>
  )
}

export default App