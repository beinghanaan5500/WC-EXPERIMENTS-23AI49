import React from "react";

const emotions = ["Happy", "Sad", "Energetic", "Chill"];

export default function EmotionButtons({ onSelect, selected }) {
  return (
    <div className="emotion-buttons">
      {emotions.map((e) => (
        <button
          key={e}
          className={`emo-btn ${selected === e ? "active" : ""}`}
          onClick={() => onSelect(e)}
        >
          {e}
        </button>
      ))}
    </div>
  );
}
