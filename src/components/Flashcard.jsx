import React, { useState } from 'react'
import '../styles/Flashcard.css'

function Flashcard({ word }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flashcard-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
        <div className="front">{word.english}</div>
        <div className="back">{word.korean}</div>
      </div>
    </div>
  )
}

export default Flashcard