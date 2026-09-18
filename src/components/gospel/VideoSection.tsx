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
    <section className="rounded-3xl p-4 sm:p-10 bg-gradient-to-b from-gospel-surface via-gospel-surface/90 to-gospel-surface border border-amber-500/30 shadow-[0_0_50px_-15px_rgba(245,158,11,0.2)] my-8 sm:my-10 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          {isKidsMode ? "🎬 60-Second Animated Video" : "🎬 Visual Spotlight"}
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-gospel-text tracking-tight">
          {isKidsMode ? "Watch: The Gospel in One Minute!" : "The Gospel In One Minute"}
        </h2>
        <p className="text-xs sm:text-sm text-gospel-muted mt-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span>A simple, fast, and animated summary of the good news.</span>
          <span className="inline-flex items-center gap-1 font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/15 px-2.5 py-0.5 rounded-full text-[11px] border border-amber-500/20">
            <Clock className="w-3 h-3" /> 1 min watch
          </span>
        </p>
      </div>

      {/* Responsive Video Container with Ambient Backlight */}
      <div className="relative max-w-4xl mx-auto">
        {/* Glow halo behind video player */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-sky-500/20 to-amber-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gospel-border-strong bg-black">
          <div className="relative pb-[56.25%] h-0">
            {!isPlaying ? (
              /* Custom click-to-play poster wrapper for instant page load speed */
              <div
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 w-full h-full group cursor-pointer bg-slate-950 flex items-center justify-center"
              >
                {/* Background thumbnail image */}
                <Image
                  src="https://i.ytimg.com/vi/EH5fO8EEvwk/hqdefault.jpg"
                  alt="Gospel In One Minute Video Thumbnail"
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover opacity-85 group-hover:opacity-95 transition-all duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

                {/* Animated Pulsing Play Button */}
                <div className="relative z-10 flex flex-col items-center gap-2.5 sm:gap-3">
                  <button
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-all duration-300 ring-4 ring-white/30"
                    aria-label="Play Gospel In One Minute video"
                  >
                    <Play className="w-7 h-7 sm:w-11 sm:h-11 fill-current ml-0.5 sm:ml-1" />
                  </button>
                  <span className="text-[11px] sm:text-sm font-bold text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                    Click to Play 60-Second Video
                  </span>
                </div>

                {/* Bottom video tag */}
                <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-4 sm:left-5 sm:right-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] sm:text-xs text-white/90 z-10 pointer-events-none">
                  <span className="font-semibold drop-shadow-md text-xs sm:text-sm truncate max-w-full">
                    Gospel In One Minute • by Kev-RaTzo
                  </span>
                  <span className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                    1:00 HD
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
      </div>

      {/* External Link Footnote */}
      <div className="mt-5 text-center relative z-10">
        <a
          href="https://www.youtube.com/watch?v=EH5fO8EEvwk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-gospel-muted hover:text-amber-400 transition-colors bg-gospel-surface px-3 py-1.5 rounded-full border border-gospel-border"
        >
          <span>Watch directly on YouTube</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
}
