import React from "react";

export default function Playlist({ tracks = [], currentIndex = 0, onPlay }) {
  if (!tracks.length) return <p>No tracks. Select another mood.</p>;

  return (
    <ul className="playlist">
      {tracks.map((t, idx) => (
        <li
          key={t.id}
          className={`track ${idx === currentIndex ? "playing" : ""}`}
          onClick={() => onPlay(idx)}
        >
          <div>
            <strong>{t.title}</strong>
            <div className="artist">{t.artist}</div>
          </div>
          <div className="play-indicator">{idx === currentIndex ? "▶" : ""}</div>
        </li>
      ))}
    </ul>
  );
}
