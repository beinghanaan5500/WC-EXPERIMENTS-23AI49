import React, { useState } from "react";
import playlists from "./data/playlists";
import EmotionButtons from "./components/EmotionButtons";
import Playlist from "./components/Playlist";
import Player from "./components/Player";

export default function App() {
  const [emotion, setEmotion] = useState(null);
  const [currentTracks, setCurrentTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectEmotion = (emo) => {
    setEmotion(emo);
    setCurrentTracks(playlists[emo] || []);
    setCurrentIndex(0);
    setIsPlaying(false);
  };

  const handlePlayTrack = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const handleNext = () => {
    if (currentTracks.length === 0) return;
    setCurrentIndex((i) => (i + 1) % currentTracks.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    if (currentTracks.length === 0) return;
    setCurrentIndex((i) =>
      (i - 1 + currentTracks.length) % currentTracks.length
    );
    setIsPlaying(true);
  };

  return (
    <div className="app">
      <h1>Moodify 🎧</h1>
      <p>Select your mood — and we’ll play tracks for it.</p>

      <EmotionButtons onSelect={handleSelectEmotion} selected={emotion} />

      {emotion && (
        <div className="content">
          <div className="left">
            <h2>{emotion} Playlist</h2>
            <Playlist
              tracks={currentTracks}
              currentIndex={currentIndex}
              onPlay={handlePlayTrack}
            />
          </div>

          <div className="right">
            <Player
              track={currentTracks[currentIndex]}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </div>
        </div>
      )}
    </div>
  );
}
