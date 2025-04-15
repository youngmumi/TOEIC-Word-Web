import React, { useState } from "react";
import FlashCardMode from "./components/FlashCardMode";
import TestMode from "./components/TestMode";

const App = () => {
  const [mode, setMode] = useState("flash"); // "flash" or "test"

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-center mb-2">🧠 토익 영단어 학습 🧠</h1>
        <div className="flex justify-center">
          <button
            onClick={() => setMode(mode === "flash" ? "test" : "flash")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {mode === "flash" ? "테스트 모드로 전환" : "플래시카드 모드로 전환"}
          </button>
        </div>
      </div>

      {mode === "flash" ? <FlashCardMode /> : <TestMode />}
    </div>
  );
};

export default App;

