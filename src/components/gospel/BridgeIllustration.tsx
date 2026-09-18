"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Volume2, VolumeX } from "lucide-react";
import type { Translation } from "./Header";

interface BridgeProps {
  translation: Translation;
}

export function BridgeIllustration({ translation }: BridgeProps) {
  const [activeStep, setActiveStep] = useState<"man" | "chasm" | "cross" | "god">("cross");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const descriptions = {
    man: {
      title: "1. Humanity in Separation",
      cliff: "Left Cliff",
      verse: "Romans 3:23",
      text: {
        ESV: "For all have sinned and fall short of the glory of God.",
        NIV: "For all have sinned and fall short of the glory of God.",
        KJV: "For all have sinned, and come short of the glory of God.",
      },
      note: "We often try to reach God with good deeds, moral effort, or religion, but on our own we all fall short of God's perfect love.",
      badgeColor: "border-rose-500 text-rose-500 dark:text-rose-400 bg-rose-500/10",
    },
    chasm: {
      title: "2. The Chasm of Sin",
      cliff: "The Abyss",
      verse: "Romans 6:23a",
      text: {
        ESV: "For the wages of sin is death...",
        NIV: "For the wages of sin is death...",
        KJV: "For the wages of sin is death...",
      },
      note: "Sin cuts us off from God, the true source of life and joy. It is a canyon too wide for any human to cross on their own.",
      badgeColor: "border-rose-600 text-rose-500 dark:text-rose-400 bg-rose-950/40",
    },
    cross: {
      title: "3. The Cross: Jesus the Bridge",
      cliff: "The Bridge",
      verse: "1 Peter 3:18 / 1 Tim 2:5",
      text: {
        ESV: "For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God.",
        NIV: "For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God.",
        KJV: "For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God.",
      },
      note: "Jesus builds the bridge! By giving His life on the cross and rising again, Jesus connects us directly back to God.",
      badgeColor: "border-amber-500 text-amber-600 dark:text-amber-400 bg-amber-500/15",
    },
    god: {
      title: "4. Holy God: Eternal Life & Peace",
      cliff: "Right Mountain",
      verse: "John 5:24",
      text: {
        ESV: "Whoever hears my word and believes him who sent me has eternal life. He does not come into judgment, but has passed from death to life.",
        NIV: "Whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life.",
        KJV: "He that heareth my word, and believeth on him that sent me, hath everlasting life, and shall not come into condemnation; but is passed from death unto life.",
      },
      note: "By trusting Jesus, we cross the bridge into God's loving family—completely forgiven, with eternal life and real peace.",
      badgeColor: "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-500/15",
    },
  };

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
    <section className="rounded-3xl p-5 sm:p-10 bg-gospel-surface border border-amber-500/30 shadow-[0_0_60px_-20px_rgba(245,158,11,0.25)] my-10 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 relative z-10">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center gap-1.5 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Visual Story
        </span>
        <h2 className="font-serif text-2xl sm:text-5xl font-bold text-gospel-text tracking-tight">
          The Bridge to Eternal Life
        </h2>
        <p className="text-xs sm:text-base text-gospel-muted mt-2">
          See how the cross of Jesus crosses the gap of sin to connect us back to God.
        </p>
      </div>

      {/* Cinematic Artwork with Interactive Hotspots */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl mb-4 sm:mb-8 group">
        <div className="relative h-64 sm:h-[420px] w-full">
          <Image
            src="/images/cross-bridge.jpg"
            alt="The Cross Bridge across the chasm to the Golden Mountain"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

          {/* Interactive Clickable Hotspots overlaying the artwork */}
          {/* 1. Left Cliff (Man) */}
          <button
            onClick={() => setActiveStep("man")}
            className={`absolute bottom-3 left-2 sm:bottom-6 sm:left-8 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl backdrop-blur-md border transition-all text-[11px] sm:text-sm font-bold shadow-xl flex items-center gap-1.5 ${
              activeStep === "man"
                ? "bg-rose-500 text-white border-rose-300 scale-105 ring-2 sm:ring-4 ring-rose-500/40"
                : "bg-black/60 text-white/90 border-white/20 hover:bg-black/80 hover:scale-105"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
            1. Us
          </button>

          {/* 2. The Chasm */}
          <button
            onClick={() => setActiveStep("chasm")}
            className={`absolute bottom-3 left-1/3 -translate-x-1/2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl backdrop-blur-md border transition-all text-[11px] sm:text-xs font-bold shadow-xl flex items-center gap-1.5 ${
              activeStep === "chasm"
                ? "bg-rose-900 text-white border-rose-500 scale-105 ring-2 sm:ring-4 ring-rose-900/40"
                : "bg-black/60 text-white/80 border-white/20 hover:bg-black/80"
            }`}
          >
            2. The Gap
          </button>

          {/* 3. The Cross (Center) */}
          <button
            onClick={() => setActiveStep("cross")}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl backdrop-blur-md border transition-all text-xs sm:text-sm font-black shadow-2xl flex items-center gap-1.5 ${
              activeStep === "cross"
                ? "bg-amber-500 text-slate-950 border-amber-300 scale-110 ring-2 sm:ring-4 ring-amber-400/50 shadow-glow-gold"
                : "bg-black/75 text-amber-400 border-amber-500/50 hover:bg-black/90 hover:scale-105"
            }`}
          >
            <span className="text-sm sm:text-base font-bold">✝</span>
            3. The Bridge
          </button>

          {/* 4. Right Mountain (Holy God) */}
          <button
            onClick={() => setActiveStep("god")}
            className={`absolute bottom-3 right-2 sm:bottom-6 sm:right-8 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl backdrop-blur-md border transition-all text-[11px] sm:text-sm font-bold shadow-xl flex items-center gap-1.5 ${
              activeStep === "god"
                ? "bg-emerald-500 text-slate-950 border-emerald-300 scale-105 ring-2 sm:ring-4 ring-emerald-500/40"
                : "bg-black/60 text-white/90 border-white/20 hover:bg-black/80 hover:scale-105"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            4. God
          </button>
        </div>
      </div>

      {/* Selected Step Explanation Card */}
      <div className="rounded-2xl p-6 sm:p-8 bg-gospel-surface-raised border border-gospel-border-strong animate-fade-in-up">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gospel-text">
              {descriptions[activeStep].title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/15 px-3 py-1 rounded-lg border border-amber-500/30">
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

        <blockquote className="font-serif text-lg sm:text-xl italic text-gospel-text pl-4 border-l-4 border-amber-500 my-4 leading-relaxed">
          &ldquo;{descriptions[activeStep].text[translation]}&rdquo;
        </blockquote>

        <p className="text-sm sm:text-base text-gospel-muted pl-4">
          {descriptions[activeStep].note}
        </p>

        {/* Step-by-step progress buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5 border-t border-gospel-border">
          <div className="flex items-center gap-2">
            {(["man", "chasm", "cross", "god"] as const).map((stepKey, idx) => (
              <button
                key={stepKey}
                onClick={() => setActiveStep(stepKey)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  activeStep === stepKey
                    ? "bg-amber-500 text-slate-950 shadow-sm font-bold"
                    : "bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text"
                }`}
              >
                {idx + 1}. {stepKey.toUpperCase()}
              </button>
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
                if (nextIdx < order.length) setActiveStep(order[nextIdx]);
              }}
              className="text-xs font-bold px-4 py-2 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 hover:bg-amber-500 hover:text-slate-950 border border-amber-500/40 transition-all flex items-center gap-1.5"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <a
              href="#prayer"
              className="text-xs font-bold px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all flex items-center gap-1.5 shadow-md"
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
