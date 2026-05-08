import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

// Audio file paths relative to public folder
const iWasNeverThere = "/audio/iwasneverthere.mp3";
const escapism = "/audio/escapism.mp3";
const blue = "/audio/blue.mp3";
const yad = "/audio/YAD.mp3";
const stars = "/audio/stars.mp3";

const MusicPlayer = () => {
  const playlist = [
    { name: "iwasneverthere.mp3", url: iWasNeverThere },
    { name: "escapism.mp3", url: escapism },
    { name: "blue.mp3", url: blue },
    { name: "YAD.mp3", url: yad },
    { name: "stars.mp3", url: stars },
  ];

  const STORAGE_KEY_INDEX = "portfolio_music_index";

  const getTrackUrl = (index) => {
    const safeIndex = index >= 0 && index < playlist.length ? index : 0;
    return playlist[safeIndex].url;
  };

  const [currentTrackIndex, setCurrentTrackIndex] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY_INDEX);
    const index = saved !== null ? parseInt(saved, 10) : 0;
    return index >= 0 && index < playlist.length ? index : 0;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Sync index to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_INDEX, currentTrackIndex.toString());
  }, [currentTrackIndex]);

  // Initial load setup
  useEffect(() => {
    if (audioRef.current && !audioRef.current.src) {
      audioRef.current.src = getTrackUrl(currentTrackIndex);
      audioRef.current.load();
    }
  }, []);

  // Toggle Play/Pause
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // Ensure source is set
        const currentUrl = getTrackUrl(currentTrackIndex);
        if (!audio.src || audio.src === "" || audio.src.includes("undefined")) {
          audio.src = currentUrl;
          audio.load();
        }
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Playback failed:", err);
      // Attempt recovery
      audio.src = getTrackUrl(currentTrackIndex);
      audio.load();
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (retryErr) {
        console.error("Retry playback failed:", retryErr);
        setIsPlaying(false);
      }
    }
  };

  // Skip to next track
  const skipTrack = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    let nextIndex;
    if (playlist.length > 1) {
      do {
        nextIndex = Math.floor(Math.random() * playlist.length);
      } while (nextIndex === currentTrackIndex);
    } else {
      nextIndex = 0;
    }

    setCurrentTrackIndex(nextIndex);
    
    // Direct playback in the click handler to maintain user gesture context
    const nextUrl = getTrackUrl(nextIndex);
    audio.pause();
    audio.src = nextUrl;
    audio.load();
    
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Skip playback failed:", err);
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-center gap-2">
      <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
        {isPlaying ? "Now Playing" : "Music"}
      </p>

      <audio
        ref={audioRef}
        src={getTrackUrl(currentTrackIndex)}
        onEnded={skipTrack}
        preload="auto"
        onError={(e) => {
          const error = e.target.error;
          console.error("Audio Error Code:", error?.code);
          console.error("Audio Error Message:", error?.message);
          console.error("Failed Source URL:", audioRef.current?.src);
        }}
      />

      <motion.button
        onClick={(e) => {
          // detail is the click count (1 for single, 2 for double)
          if (e.detail === 2) {
            skipTrack();
          } else if (e.detail === 1) {
            togglePlay();
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-[var(--accent)] transition-all duration-300"
        style={{
          boxShadow: isPlaying ? "0 0 20px var(--accent)" : "none",
        }}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
      </motion.button>
      
      <p className="text-[9px] text-white/20 font-mono hidden sm:block">
        Double click to skip
      </p>
    </div>
  );
};

export default MusicPlayer;

