import React, { useEffect, useRef, useState } from "react";

export default function Player({ track, isPlaying, setIsPlaying, onNext, onPrev }) {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [track]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying]);

  const onTimeUpdate = () => setProgress(audioRef.current.currentTime || 0);
  const onLoaded = () => setDuration(audioRef.current.duration || 0);
  const togglePlay = () => setIsPlaying((p) => !p);

  const seek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  if (!track) return <div className="player">Select a track to play</div>;

  const format = (s) =>
    isNaN(s) ? "0:00" : `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div className="player">
      <div className="track-info">
        <h3>{track.title}</h3>
        <p className="artist">{track.artist}</p>
      </div>
      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoaded}
        onEnded={onNext}
      />
      <div className="controls">
        <button onClick={onPrev}>⏮</button>
        <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶"}</button>
        <button onClick={onNext}>⏭</button>
      </div>
      <div className="progress" onClick={seek}>
        <div
          className="progress-bar"
          style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }}
        />
      </div>
      <div className="time">
        {format(progress)} / {format(duration)}
      </div>
    </div>
  );
}
