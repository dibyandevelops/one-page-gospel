"use client";

import React, { useState } from "react";
import { Sparkles, AlertTriangle, ShieldCheck, Heart } from "lucide-react";
import type { Translation } from "./Header";

interface BridgeProps {
  translation: Translation;
}

export function BridgeIllustration({ translation }: BridgeProps) {
  const [activeStep, setActiveStep] = useState<"man" | "chasm" | "cross" | "god">("cross");

  const descriptions = {
    man: {
      title: "Humanity's Condition",
      verse: "Romans 3:23",
      text: {
        ESV: "For all have sinned and fall short of the glory of God.",
        NIV: "For all have sinned and fall short of the glory of God.",
        KJV: "For all have sinned, and come short of the glory of God.",
      },
      note: "Humans try to bridge the gap with good deeds, philosophy, or religion, but all fall short of God's holiness.",
    },
    chasm: {
      title: "The Chasm of Sin & Separation",
      verse: "Romans 6:23a",
      text: {
        ESV: "For the wages of sin is death...",
        NIV: "For the wages of sin is death...",
        KJV: "For the wages of sin is death...",
      },
      note: "The consequence of sin is spiritual separation from God, an uncrossable gulf by mortal strength.",
    },
    cross: {
      title: "The Bridge: Jesus Christ",
      verse: "1 Peter 3:18 / 1 Tim 2:5",
      text: {
        ESV: "For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God.",
        NIV: "For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God.",
        KJV: "For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God.",
      },
      note: "Jesus spans the divide between a holy God and fallen mankind by taking our punishment upon Himself.",
    },
    god: {
      title: "God: Eternal Life & Relationship",
      verse: "John 5:24",
      text: {
        ESV: "Whoever hears my word and believes him who sent me has eternal life. He does not come into judgment, but has passed from death to life.",
        NIV: "Whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life.",
        KJV: "He that heareth my word, and believeth on him that sent me, hath everlasting life, and shall not come into condemnation; but is passed from death unto life.",
      },
      note: "By stepping onto the bridge through faith, we enter reconciled communion and eternal peace with God.",
    },
  };

  return (
    <section className="rounded-app-lg p-6 sm:p-8 bg-gospel-surface border border-gospel-border shadow-soft-card my-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-500 flex items-center justify-center gap-1.5 mb-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Visual Diagram
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gospel-text">
          The Bridge to Eternal Life
        </h2>
        <p className="text-sm sm:text-base text-gospel-muted mt-2">
          Click on any part of the diagram to explore how Jesus bridges the great separation between humanity and God.
        </p>
      </div>

      {/* Visual Canvas */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gospel-surface-raised to-gospel-surface border border-gospel-border p-6 sm:p-10 mb-8 min-h-[300px] flex flex-col justify-between">
        {/* Top Indicators */}
        <div className="grid grid-cols-3 text-center mb-6">
          <div className="font-bold text-rose-400 text-xs sm:text-sm flex items-center justify-center gap-1">
            <AlertTriangle className="w-4 h-4" />
            <span>Man in Brokenness</span>
          </div>
          <div className="font-bold text-amber-400 text-xs sm:text-sm flex items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Christ the Mediator</span>
          </div>
          <div className="font-bold text-emerald-400 text-xs sm:text-sm flex items-center justify-center gap-1">
            <Heart className="w-4 h-4" />
            <span>Holy & Loving God</span>
          </div>
        </div>

        {/* The Cliffs and Bridge Diagram */}
        <div className="relative h-44 sm:h-52 flex items-end">
          {/* Left Cliff: Humanity */}
          <button
            onClick={() => setActiveStep("man")}
            className={`w-[32%] h-36 rounded-tl-xl rounded-tr-lg border-t-4 border-r-2 flex flex-col items-center justify-center p-3 text-center transition-all ${
              activeStep === "man"
                ? "bg-rose-950/40 border-rose-500 shadow-lg shadow-rose-950/50"
                : "bg-gospel-surface-soft border-rose-500/40 hover:border-rose-500"
            }`}
          >
            <span className="font-serif font-bold text-sm sm:text-base text-gospel-text">
              HUMANITY
            </span>
            <span className="text-[11px] text-gospel-muted mt-1 leading-tight">
              Sin • Death • Guilt
            </span>
            <span className="text-[10px] text-rose-400 font-mono mt-2 bg-rose-500/10 px-2 py-0.5 rounded">
              Romans 3:23
            </span>
          </button>

          {/* Center Chasm & Cross Bridge */}
          <div className="w-[36%] h-full flex flex-col items-center justify-end relative px-2">
            {/* The Infinite Chasm background */}
            <button
              onClick={() => setActiveStep("chasm")}
              className={`absolute bottom-0 w-full h-16 rounded-b-lg border-b-2 flex flex-col items-center justify-center transition-all ${
                activeStep === "chasm"
                  ? "bg-rose-950/60 border-rose-600"
                  : "bg-black/30 border-gospel-border-strong hover:bg-black/50"
              }`}
            >
              <span className="text-[10px] uppercase font-bold text-rose-400/80 tracking-widest">
                The Chasm of Sin
              </span>
            </button>

            {/* The Cross Bridge spanning across */}
            <button
              onClick={() => setActiveStep("cross")}
              className={`relative z-10 w-full mb-12 flex flex-col items-center transition-all transform hover:scale-105 ${
                activeStep === "cross" ? "scale-105" : "opacity-90 hover:opacity-100"
              }`}
            >
              {/* Cross visual */}
              <div className="relative flex flex-col items-center">
                {/* Vertical post */}
                <div className="w-5 sm:w-6 h-28 bg-gradient-to-b from-amber-400 to-amber-600 rounded-sm shadow-glow-gold relative flex items-center justify-center">
                  <span className="text-[10px] font-bold text-black uppercase -rotate-90 tracking-wider">
                    JESUS
                  </span>
                </div>
                {/* Horizontal cross beam */}
                <div className="absolute top-7 w-28 sm:w-36 h-5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-sm shadow-md flex items-center justify-around px-2 text-[9px] font-extrabold text-black tracking-wider">
                  <span>GRACE</span>
                  <span>TRUTH</span>
                </div>
              </div>
              <span className="text-xs font-bold text-amber-400 mt-2 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/40">
                1 Peter 3:18
              </span>
            </button>
          </div>

          {/* Right Cliff: God */}
          <button
            onClick={() => setActiveStep("god")}
            className={`w-[32%] h-36 rounded-tl-lg rounded-tr-xl border-t-4 border-l-2 flex flex-col items-center justify-center p-3 text-center transition-all ${
              activeStep === "god"
                ? "bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-950/50"
                : "bg-gospel-surface-soft border-emerald-500/40 hover:border-emerald-500"
            }`}
          >
            <span className="font-serif font-bold text-sm sm:text-base text-gospel-text">
              HOLY GOD
            </span>
            <span className="text-[11px] text-gospel-muted mt-1 leading-tight">
              Life • Peace • Joy
            </span>
            <span className="text-[10px] text-emerald-400 font-mono mt-2 bg-emerald-500/10 px-2 py-0.5 rounded">
              John 5:24
            </span>
          </button>
        </div>
      </div>

      {/* Selected Step Explanation Card */}
      <div className="rounded-xl p-5 bg-gospel-surface-raised border border-gospel-border-strong animate-fade-in-up">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <h3 className="font-serif text-lg font-bold text-gospel-text">
              {descriptions[activeStep].title}
            </h3>
          </div>
          <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
            {descriptions[activeStep].verse}
          </span>
        </div>

        <blockquote className="font-serif text-base sm:text-lg italic text-gospel-text pl-3 border-l-2 border-amber-500/50 my-2">
          &ldquo;{descriptions[activeStep].text[translation]}&rdquo;
        </blockquote>

        <p className="text-sm text-gospel-muted mt-3 pl-3">
          {descriptions[activeStep].note}
        </p>

        {/* Step buttons */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-gospel-border">
          <span className="text-xs text-gospel-muted mr-2">Jump to:</span>
          <button
            onClick={() => setActiveStep("man")}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
              activeStep === "man"
                ? "bg-rose-500/20 text-rose-400 font-bold"
                : "text-gospel-muted hover:text-gospel-text"
            }`}
          >
            1. Humanity
          </button>
          <button
            onClick={() => setActiveStep("chasm")}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
              activeStep === "chasm"
                ? "bg-rose-500/20 text-rose-400 font-bold"
                : "text-gospel-muted hover:text-gospel-text"
            }`}
          >
            2. The Chasm
          </button>
          <button
            onClick={() => setActiveStep("cross")}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
              activeStep === "cross"
                ? "bg-amber-500/20 text-amber-400 font-bold"
                : "text-gospel-muted hover:text-gospel-text"
            }`}
          >
            3. The Cross Bridge
          </button>
          <button
            onClick={() => setActiveStep("god")}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
              activeStep === "god"
                ? "bg-emerald-500/20 text-emerald-400 font-bold"
                : "text-gospel-muted hover:text-gospel-text"
            }`}
          >
            4. Holy God
          </button>
        </div>
      </div>
    </section>
  );
}
