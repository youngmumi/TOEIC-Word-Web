import React, { useState } from "react";
import FlashCardMode from "./components/FlashCardMode";
import TestMode from "./components/TestMode";

const TOTAL_WORDS = 100; // 단어 총 개수 예시
const PAGE_SIZE = 25;
const TOTAL_PAGES = Math.ceil(TOTAL_WORDS / PAGE_SIZE);

const App = () => {
  const [mode, setMode] = useState("flash"); // "flash" or "test"
  const [page, setPage] = useState(0); // 0부터 시작하는 day 인덱스

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-center mb-2 ">🧠 토익 영단어 학습 🧠</h1>

        <div className="flex justify-center gap-2 flex-wrap mb-4">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`px-3 py-1 rounded ${
                page === i ? "bg-blue-700 text-white" : "bg-blue-300 text-white"
              }`}
            >
              Day {i + 1}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-4">
          <button
            onClick={() => setMode(mode === "flash" ? "test" : "flash")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {mode === "flash" ? "테스트 모드로 전환" : "플래시카드 모드로 전환"}
          </button>
        </div>
      </div>

      {mode === "flash" ? <FlashCardMode page={page} /> : <TestMode page={page} />}
    </div>
  );
};

export default App;
