"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Clock, ExternalLink } from "lucide-react";

interface VideoSectionProps {
  isKidsMode?: boolean;
}

export function VideoSection({ isKidsMode = false }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="rounded-app-lg p-6 sm:p-8 bg-gospel-surface border border-gospel-border shadow-soft-card my-8 overflow-hidden relative">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          {isKidsMode ? "🎬 Fun 60-Second Video" : "🎬 Visual Summary"}
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gospel-text">
          {isKidsMode ? "Watch: The Gospel in One Minute!" : "The Gospel In One Minute"}
        </h2>
        <p className="text-xs sm:text-sm text-gospel-muted mt-1.5 flex items-center justify-center gap-2">
          <span>A clear, fast, and animated presentation of the good news.</span>
          <span className="inline-flex items-center gap-1 font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded text-[11px]">
            <Clock className="w-3 h-3" /> 1 min watch
          </span>
        </p>
      </div>

      {/* Responsive Video Container */}
      <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gospel-border-strong bg-black">
        <div className="relative pb-[56.25%] h-0">
          {!isPlaying ? (
            /* Custom click-to-play poster wrapper for instant page load speed */
            <div className="absolute inset-0 w-full h-full group cursor-pointer bg-slate-950 flex items-center justify-center">
              {/* Background thumbnail image */}
              <Image
                src="https://i.ytimg.com/vi/EH5fO8EEvwk/hqdefault.jpg"
                alt="Gospel In One Minute Video Thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover opacity-80 group-hover:opacity-95 transition-all duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-glow-gold group-hover:bg-amber-400 group-hover:scale-110 transition-all duration-300"
                aria-label="Play Gospel In One Minute video"
              >
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
              </button>

              {/* Bottom tag */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90 z-10 pointer-events-none">
                <span className="font-semibold drop-shadow-md">
                  Gospel In One Minute • by Kev-RaTzo
                </span>
                <span className="bg-black/60 px-2 py-0.5 rounded text-[11px] font-mono">
                  1:00
                </span>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube-nocookie.com/embed/EH5fO8EEvwk?autoplay=1&rel=0"
              title="Gospel In One Minute"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
            />
          )}
        </div>
      </div>

      {/* External Link Footnote */}
      <div className="mt-4 text-center">
        <a
          href="https://www.youtube.com/watch?v=EH5fO8EEvwk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-gospel-muted hover:text-amber-500 transition-colors"
        >
          <span>Open directly on YouTube</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
}
