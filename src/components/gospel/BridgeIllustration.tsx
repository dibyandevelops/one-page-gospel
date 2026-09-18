"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Volume2, VolumeX, X, Info } from "lucide-react";
import type { Translation } from "./Header";

interface BridgeProps {
  translation: Translation;
}

export function BridgeIllustration({ translation }: BridgeProps) {
  const [activeStep, setActiveStep] = useState<"man" | "chasm" | "cross" | "god">("cross");
  const [showTooltip, setShowTooltip] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hoveredBottomStep, setHoveredBottomStep] = useState<string | null>(null);

  const descriptions = {
    man: {
      title: "1. Humanity in Separation",
      cliff: "Left Cliff",
      verse: "Romans 3:23",
      shortTooltip: "All of us have fallen short of God's perfect love and holy standard.",
      text: {
        ESV: "For all have sinned and fall short of the glory of God.",
        NIV: "For all have sinned and fall short of the glory of God.",
        KJV: "For all have sinned, and come short of the glory of God.",
      },
      note: "We often try to reach God with good deeds, moral effort, or religion, but on our own we all fall short of God's perfect love.",
      badgeColor: "border-rose-500 text-rose-500 dark:text-rose-400 bg-rose-500/10",
      tooltipBorder: "border-rose-500/50",
      tooltipBadge: "text-rose-400 bg-rose-500/20 border-rose-500/30",
    },
    chasm: {
      title: "2. The Chasm of Sin",
      cliff: "The Abyss",
      verse: "Romans 6:23a",
      shortTooltip: "The canyon of sin is an infinite gap too wide for any human effort to cross.",
      text: {
        ESV: "For the wages of sin is death...",
        NIV: "For the wages of sin is death...",
        KJV: "For the wages of sin is death...",
      },
      note: "Sin cuts us off from God, the true source of life and joy. It is a canyon too wide for any human to cross on their own.",
      badgeColor: "border-rose-600 text-rose-500 dark:text-rose-400 bg-rose-950/40",
      tooltipBorder: "border-rose-600/50",
      tooltipBadge: "text-rose-400 bg-rose-950/50 border-rose-600/30",
    },
    cross: {
      title: "3. The Solution: Jesus the Bridge",
      cliff: "The Solution",
      verse: "1 Peter 3:18",
      shortTooltip: "Jesus is the solution! His life, cross, and resurrection solve the problem of sin and bridge the gap to God.",
      text: {
        ESV: "For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God.",
        NIV: "For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God.",
        KJV: "For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God.",
      },
      note: "Jesus is God's perfect solution! By giving His life on the cross and rising again, Jesus connects us directly back to God.",
      badgeColor: "border-amber-500 text-amber-600 dark:text-amber-400 bg-amber-500/15",
      tooltipBorder: "border-amber-400/60",
      tooltipBadge: "text-amber-300 bg-amber-500/25 border-amber-400/40",
    },
    god: {
      title: "4. Holy God: Eternal Life & Peace",
      cliff: "Right Mountain",
      verse: "John 5:24",
      shortTooltip: "Crossing through Jesus brings unconditional forgiveness, eternal life, and peace with God.",
      text: {
        ESV: "Whoever hears my word and believes him who sent me has eternal life. He does not come into judgment, but has passed from death to life.",
        NIV: "Whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life.",
        KJV: "He that heareth my word, and believeth on him that sent me, hath everlasting life, and shall not come into condemnation; but is passed from death unto life.",
      },
      note: "By trusting Jesus, we cross the bridge into God's loving family—completely forgiven, with eternal life and real peace.",
      badgeColor: "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-500/15",
      tooltipBorder: "border-emerald-500/50",
      tooltipBadge: "text-emerald-300 bg-emerald-500/20 border-emerald-500/30",
    },
  };

  const handleStepClick = (step: "man" | "chasm" | "cross" | "god") => {
    if (activeStep === step && showTooltip) {
      setShowTooltip(false);
    } else {
      setActiveStep(step);
      setShowTooltip(true);
    }
  };

  // Close tooltip when user clicks elsewhere on the document
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest("[data-bridge-interactive]")) {
        // Only dismiss if clicked outside our interactive components
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSpeak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const current = descriptions[activeStep];
    const textToRead = `${current.title}. ${current.verse}. ${current.text[translation]}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="solution" className="rounded-3xl p-3.5 sm:p-10 bg-gospel-surface border border-amber-500/30 shadow-[0_0_60px_-20px_rgba(245,158,11,0.25)] my-8 sm:my-10 overflow-visible relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-8 relative z-10 px-1">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center gap-1.5 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Visual Story
        </span>
        <h2 className="font-display text-2xl sm:text-5xl font-extrabold text-gospel-text tracking-tight">
          The Solution: Jesus Bridges the Gap
        </h2>
        <p className="text-xs sm:text-base text-gospel-muted mt-2">
          Click any button on the artwork to discover how Jesus provides God&apos;s solution to the problem of sin.
        </p>
      </div>

      {/* Cinematic Artwork with Interactive Hotspots & Tooltips */}
      <div className="relative rounded-2xl sm:rounded-3xl border-2 border-amber-500/30 shadow-2xl mb-5 sm:mb-8">
        {/* The artwork image itself (clipped with rounded corners) */}
        <div className="relative h-80 sm:h-[450px] w-full rounded-[14px] sm:rounded-[22px] overflow-hidden">
          <Image
            src="/images/cross-bridge.jpg"
            alt="The Cross Bridge across the chasm to the Golden Mountain"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

          {/* Helper Hint Pill on Artwork */}
          <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs text-white/95 shadow-md">
              <Info className="w-3 h-3 text-amber-400" />
              <span>Tap buttons to view details</span>
            </div>
          </div>
        </div>

        {/* Interactive Hotspot Layer with unclipped floating tooltips */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* 1. Left Cliff (Man) */}
          <div
            data-bridge-interactive="true"
            className="absolute bottom-2.5 left-1.5 sm:bottom-6 sm:left-8 pointer-events-auto"
          >
            {showTooltip && activeStep === "man" && (
              <div
                role="tooltip"
                className="fixed inset-x-4 bottom-20 sm:absolute sm:inset-auto sm:bottom-full sm:mb-2.5 sm:left-0 sm:w-72 sm:max-w-[calc(100vw-3rem)] p-3 sm:p-3.5 rounded-2xl bg-slate-950/95 text-white backdrop-blur-xl border border-rose-500/50 shadow-[0_12px_30px_rgba(0,0,0,0.7)] animate-fade-in-up z-50"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded-md border border-rose-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                    Step 1 • Us
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTooltip(false);
                    }}
                    className="p-1 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close tooltip"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug mb-2">
                  {descriptions.man.shortTooltip}
                </p>
                <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[10px] sm:text-[11px]">
                  <span className="font-mono text-amber-300 font-semibold">{descriptions.man.verse}</span>
                  <span className="text-slate-400">See details below ↓</span>
                </div>
                {/* Tooltip Arrow (desktop) */}
                <div className="hidden sm:block absolute -bottom-1.5 left-6 w-3 h-3 rotate-45 bg-slate-950 border-r border-b border-rose-500/50" />
              </div>
            )}
            <button
              onClick={() => handleStepClick("man")}
              className={`px-2 py-1.5 sm:px-3.5 sm:py-2 rounded-xl backdrop-blur-md border transition-all text-[10px] sm:text-sm font-bold shadow-xl flex items-center gap-1 sm:gap-1.5 min-h-[36px] ${
                activeStep === "man"
                  ? "bg-rose-500 text-white border-rose-300 scale-105 ring-2 sm:ring-4 ring-rose-500/40"
                  : "bg-black/60 text-white/90 border-white/20 hover:bg-black/80 hover:scale-105"
              }`}
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-400 animate-ping" />
              <span>1. Us</span>
            </button>
          </div>

          {/* 2. The Chasm */}
          <div
            data-bridge-interactive="true"
            className="absolute bottom-2.5 left-[29%] -translate-x-1/2 sm:bottom-6 sm:left-1/3 pointer-events-auto"
          >
            {showTooltip && activeStep === "chasm" && (
              <div
                role="tooltip"
                className="fixed inset-x-4 bottom-20 sm:absolute sm:inset-auto sm:bottom-full sm:mb-2.5 sm:left-1/2 sm:-translate-x-1/2 sm:w-72 sm:max-w-[calc(100vw-3rem)] p-3 sm:p-3.5 rounded-2xl bg-slate-950/95 text-white backdrop-blur-xl border border-rose-600/50 shadow-[0_12px_30px_rgba(0,0,0,0.7)] animate-fade-in-up z-50"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/50 px-2 py-0.5 rounded-md border border-rose-600/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    Step 2 • The Gap
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTooltip(false);
                    }}
                    className="p-1 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close tooltip"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug mb-2">
                  {descriptions.chasm.shortTooltip}
                </p>
                <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[10px] sm:text-[11px]">
                  <span className="font-mono text-amber-300 font-semibold">{descriptions.chasm.verse}</span>
                  <span className="text-slate-400">See details below ↓</span>
                </div>
                {/* Tooltip Arrow (desktop) */}
                <div className="hidden sm:block absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-slate-950 border-r border-b border-rose-600/50" />
              </div>
            )}
            <button
              onClick={() => handleStepClick("chasm")}
              className={`px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl backdrop-blur-md border transition-all text-[10px] sm:text-xs font-bold shadow-xl flex items-center gap-1 sm:gap-1.5 min-h-[36px] ${
                activeStep === "chasm"
                  ? "bg-rose-900 text-white border-rose-500 scale-105 ring-2 sm:ring-4 ring-rose-900/40"
                  : "bg-black/60 text-white/80 border-white/20 hover:bg-black/80"
              }`}
            >
              <span>2. <span className="hidden xs:inline sm:inline">The </span>Gap</span>
            </button>
          </div>

          {/* 3. The Cross (Center) */}
          <div
            data-bridge-interactive="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
          >
            {showTooltip && activeStep === "cross" && (
              <div
                role="tooltip"
                className="fixed inset-x-4 bottom-20 sm:absolute sm:inset-auto sm:bottom-full sm:mb-3 sm:left-1/2 sm:-translate-x-1/2 sm:w-80 sm:max-w-[calc(100vw-3rem)] p-3 sm:p-4 rounded-2xl bg-slate-950/95 text-white backdrop-blur-xl border border-amber-400/60 shadow-[0_14px_35px_rgba(245,158,11,0.35)] animate-fade-in-up z-50"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/25 px-2 py-0.5 rounded-md border border-amber-400/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    Step 3 • The Solution
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTooltip(false);
                    }}
                    className="p-1 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close tooltip"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-100 leading-snug mb-2">
                  {descriptions.cross.shortTooltip}
                </p>
                <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[10px] sm:text-[11px]">
                  <span className="font-mono text-amber-300 font-semibold">{descriptions.cross.verse}</span>
                  <span className="text-slate-400">See details below ↓</span>
                </div>
                {/* Tooltip Arrow (desktop) */}
                <div className="hidden sm:block absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-slate-950 border-r border-b border-amber-400/60" />
              </div>
            )}
            <button
              onClick={() => handleStepClick("cross")}
              className={`px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl backdrop-blur-md border transition-all text-[11px] sm:text-sm font-black shadow-2xl flex items-center gap-1 sm:gap-1.5 min-h-[38px] ${
                activeStep === "cross"
                  ? "bg-amber-500 text-slate-950 border-amber-300 scale-105 sm:scale-110 ring-2 sm:ring-4 ring-amber-400/50 shadow-glow-gold"
                  : "bg-black/75 text-amber-400 border-amber-500/50 hover:bg-black/90 hover:scale-105"
              }`}
            >
              <span className="text-xs sm:text-base font-bold">✝</span>
              <span>3. <span className="hidden xs:inline sm:inline">The </span>Solution</span>
            </button>
          </div>

          {/* 4. Right Mountain (Holy God) */}
          <div
            data-bridge-interactive="true"
            className="absolute bottom-2.5 right-1.5 sm:bottom-6 sm:right-8 pointer-events-auto"
          >
            {showTooltip && activeStep === "god" && (
              <div
                role="tooltip"
                className="fixed inset-x-4 bottom-20 sm:absolute sm:inset-auto sm:bottom-full sm:mb-2.5 sm:right-0 sm:w-72 sm:max-w-[calc(100vw-3rem)] p-3 sm:p-3.5 rounded-2xl bg-slate-950/95 text-white backdrop-blur-xl border border-emerald-500/50 shadow-[0_12px_30px_rgba(0,0,0,0.7)] animate-fade-in-up z-50"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Step 4 • God
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTooltip(false);
                    }}
                    className="p-1 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close tooltip"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug mb-2">
                  {descriptions.god.shortTooltip}
                </p>
                <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[10px] sm:text-[11px]">
                  <span className="font-mono text-emerald-300 font-semibold">{descriptions.god.verse}</span>
                  <span className="text-slate-400">See details below ↓</span>
                </div>
                {/* Tooltip Arrow (desktop) */}
                <div className="hidden sm:block absolute -bottom-1.5 right-6 w-3 h-3 rotate-45 bg-slate-950 border-r border-b border-emerald-500/50" />
              </div>
            )}
            <button
              onClick={() => handleStepClick("god")}
              className={`px-2 py-1.5 sm:px-3.5 sm:py-2 rounded-xl backdrop-blur-md border transition-all text-[10px] sm:text-sm font-bold shadow-xl flex items-center gap-1 sm:gap-1.5 min-h-[36px] ${
                activeStep === "god"
                  ? "bg-emerald-500 text-slate-950 border-emerald-300 scale-105 ring-2 sm:ring-4 ring-emerald-500/40"
                  : "bg-black/60 text-white/90 border-white/20 hover:bg-black/80 hover:scale-105"
              }`}
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>4. God</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Step Explanation Card */}
      <div className="rounded-2xl p-4 sm:p-8 bg-gospel-surface-raised/80 backdrop-blur-md border border-gospel-border-strong animate-fade-in-up shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
            <h3 className="font-display text-lg sm:text-2xl font-bold text-gospel-text tracking-tight">
              {descriptions[activeStep].title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-lg border border-amber-500/30">
              {descriptions[activeStep].verse}
            </span>

            {/* Listen button */}
            <button
              onClick={handleSpeak}
              title={isSpeaking ? "Stop listening" : "Listen to this passage"}
              className="p-1.5 rounded-lg bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              {isSpeaking ? (
                <VolumeX className="w-4 h-4 text-amber-500 animate-pulse" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <blockquote className="text-base sm:text-xl italic text-gospel-text pl-3 sm:pl-4 border-l-2 border-amber-500 my-3 sm:my-4 leading-relaxed">
          &ldquo;{descriptions[activeStep].text[translation]}&rdquo;
        </blockquote>

        <p className="text-xs sm:text-base text-gospel-muted pl-3 sm:pl-4">
          {descriptions[activeStep].note}
        </p>

        {/* Step-by-step progress buttons with interactive mini-tooltips */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-5 pt-4 border-t border-gospel-border">
          <div className="grid grid-cols-4 sm:flex items-center gap-1 sm:gap-2">
            {(["man", "chasm", "cross", "god"] as const).map((stepKey, idx) => (
              <div key={stepKey} className="relative" data-bridge-interactive="true">
                {/* Mini tooltip on hover/focus */}
                {hoveredBottomStep === stepKey && (
                  <div
                    role="tooltip"
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-950 text-white text-[10px] font-semibold whitespace-nowrap border border-amber-500/40 shadow-xl z-30 pointer-events-none animate-fade-in-up"
                  >
                    {descriptions[stepKey].verse}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-slate-950 border-r border-b border-amber-500/40" />
                  </div>
                )}
                <button
                  onClick={() => {
                    setActiveStep(stepKey);
                    setShowTooltip(true);
                  }}
                  onMouseEnter={() => setHoveredBottomStep(stepKey)}
                  onMouseLeave={() => setHoveredBottomStep(null)}
                  title={`Click to inspect: ${descriptions[stepKey].title}`}
                  className={`w-full sm:w-auto text-[11px] sm:text-xs px-2 sm:px-3 py-1.5 rounded-lg font-semibold transition-all min-h-[36px] flex items-center justify-center ${
                    activeStep === stepKey
                      ? "bg-amber-500 text-slate-950 shadow-sm font-bold scale-105"
                      : "bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text"
                  }`}
                >
                  {idx + 1}. {stepKey === "cross" ? "Solution" : descriptions[stepKey].cliff.split(" ")[0]}
                </button>
              </div>
            ))}
          </div>

          {activeStep !== "god" ? (
            <button
              onClick={() => {
                const order: ("man" | "chasm" | "cross" | "god")[] = [
                  "man",
                  "chasm",
                  "cross",
                  "god",
                ];
                const nextIdx = order.indexOf(activeStep) + 1;
                if (nextIdx < order.length) {
                  setActiveStep(order[nextIdx]);
                  setShowTooltip(true);
                }
              }}
              className="w-full sm:w-auto text-xs font-bold px-4 py-2.5 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 hover:bg-amber-500 hover:text-slate-950 border border-amber-500/40 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <a
              href="#prayer"
              className="w-full sm:w-auto text-xs font-bold px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>Accept the Free Gift</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}


