"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";


const VideoPlayer = ({ 
  src, 
  autoPlay = false, 
  loop = false 
}: { 
  src: string; 
  autoPlay?: boolean; 
  loop?: boolean; 
}) => {
const videoRef = useRef<HTMLVideoElement>(null);
const [isPlaying, setIsPlaying] = useState(false);

// Auto-play effect
useEffect(() => {
  if (autoPlay && videoRef.current) {
    videoRef.current.play().catch((error) => {
      console.log("Auto-play was prevented:", error);
    });
    setIsPlaying(true);
  }
}, [autoPlay]);

return (
  <motion.div
    className="relative border-[6px] w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <video
      ref={videoRef}
      className="w-full"
      src={src}
      loop={loop}
    />
  </motion.div>
);
};

export default VideoPlayer;