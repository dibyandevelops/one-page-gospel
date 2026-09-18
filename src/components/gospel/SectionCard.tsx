"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  AlertCircle,
  Plus,
  Minus,
  CheckCircle2,
  HelpCircle,
  BookMarked,
  HeartHandshake,
  Compass,
  Volume2,
  VolumeX,
} from "lucide-react";
import type { GospelStep } from "@/lib/gospel-data";
import type { Translation } from "./Header";

interface SectionCardProps {
  step: GospelStep;
  translation: Translation;
}

export function SectionCard({ step, translation }: SectionCardProps) {
  const [showMoreVerses, setShowMoreVerses] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Text to speech for scripture
  const handleSpeak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToRead = `${step.keyVerse.reference}. ${step.keyVerse.translations[translation]}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Icon mapping
  const renderIcon = () => {
    switch (step.iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case "AlertCircle":
        return <AlertCircle className="w-5 h-5 text-rose-400" />;
      case "Cross":
        return (
          <div className="w-5 h-5 flex items-center justify-center font-serif text-xl font-black text-amber-400 leading-none">
            ✝
          </div>
        );
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-sky-400" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-amber-500" />;
      default:
        return <BookMarked className="w-5 h-5 text-amber-400" />;
    }
  };

  const getThemeGlow = () => {
    switch (step.themeColor) {
      case "emerald":
        return "shadow-[0_0_50px_-15px_rgba(16,185,129,0.15)] border-emerald-500/30";
      case "crimson":
        return "shadow-[0_0_50px_-15px_rgba(244,63,94,0.15)] border-rose-500/30";
      case "gold":
        return "shadow-[0_0_50px_-15px_rgba(245,158,11,0.2)] border-amber-500/40";
      case "blue":
        return "shadow-[0_0_50px_-15px_rgba(56,189,248,0.15)] border-sky-500/30";
      case "amber":
        return "shadow-[0_0_50px_-15px_rgba(245,158,11,0.18)] border-amber-500/30";
    }
  };

  return (
    <article
      id={step.id}
      className={`rounded-3xl overflow-hidden bg-gospel-surface border transition-all duration-300 ${getThemeGlow()}`}
    >
      {/* Cinematic Image Header */}
      <div className="relative h-60 sm:h-80 w-full overflow-hidden group">
        <Image
          src={step.image}
          alt={step.title}
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gospel-surface via-gospel-surface/40 to-black/30" />

        {/* Floating Step Badge on top of image */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
            {renderIcon()}
          </div>
          <div className="bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl shadow-lg">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
              Stage 0{step.number} • {step.subtitle}
            </span>
          </div>
        </div>

        {/* Title over gradient bottom */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white drop-shadow-md tracking-tight">
            {step.title}
          </h2>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-8">
        {/* Main explanation paragraph */}
        <p className="text-base sm:text-lg text-gospel-text/90 leading-relaxed font-normal mb-8">
          {step.summary}
        </p>

        {/* Key Scripture Quote Block */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gospel-surface-raised via-gospel-surface-raised/90 to-gospel-surface border border-gospel-border-strong p-6 sm:p-8 mb-8 shadow-inner">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                <BookMarked className="w-4 h-4" />
                Key Scripture ({translation})
              </span>
              <span className="text-xs font-semibold text-gospel-muted font-mono bg-gospel-surface px-2 py-0.5 rounded border border-gospel-border">
                {step.keyVerse.reference}
              </span>
            </div>

            {/* Listen / Audio Readout button */}
            <button
              onClick={handleSpeak}
              title={isSpeaking ? "Stop listening" : "Listen to this scripture"}
              className={`p-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                isSpeaking
                  ? "bg-amber-500 text-slate-950 font-bold shadow-glow-gold animate-pulse"
                  : "bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-amber-400 hover:border-amber-400/40"
              }`}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" /> Stop
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" /> Listen
                </>
              )}
            </button>
          </div>

          <blockquote className="font-serif text-xl sm:text-2xl italic text-gospel-text leading-relaxed pl-4 border-l-4 border-amber-500 my-4">
            &ldquo;{step.keyVerse.translations[translation]}&rdquo;
          </blockquote>

          {step.keyVerse.contextNote && (
            <p className="text-xs text-gospel-muted mt-3 italic pl-4">
              💡 {step.keyVerse.contextNote}
            </p>
          )}

          {/* Supplementary verses toggle */}
          {step.supplementaryVerses && step.supplementaryVerses.length > 0 && (
            <div className="mt-5 pt-4 border-t border-gospel-border/50">
              <button
                onClick={() => setShowMoreVerses(!showMoreVerses)}
                className="text-xs font-semibold text-gospel-muted hover:text-amber-500 transition-colors flex items-center gap-1.5"
              >
                {showMoreVerses ? (
                  <>
                    <Minus className="w-3.5 h-3.5" /> Hide Supporting Verses
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" /> View Supporting Scriptures ({step.supplementaryVerses.length})
                  </>
                )}
              </button>

              {showMoreVerses && (
                <div className="mt-3 space-y-3 pl-3 border-l-2 border-gospel-border-strong animate-fade-in-up">
                  {step.supplementaryVerses.map((sv, idx) => (
                    <div key={idx} className="text-sm">
                      <p className="font-semibold text-xs text-amber-400 font-mono mb-0.5">
                        {sv.reference}
                      </p>
                      <p className="text-gospel-muted italic font-serif text-sm">
                        &ldquo;{sv.translations[translation]}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Takeaways & Reflection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Takeaway points */}
          <div className="rounded-2xl p-5 bg-gospel-surface-raised/60 border border-gospel-border">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gospel-muted mb-3">
              Key Insights
            </h3>
            <ul className="space-y-2.5">
              {step.takeawayPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gospel-text/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Reflection */}
          <div className="rounded-2xl p-5 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 mb-2.5">
                <HelpCircle className="w-4 h-4" />
                Heart Reflection
              </div>
              <p className="text-base italic text-gospel-text font-serif leading-relaxed">
                &ldquo;{step.reflectionQuestion}&rdquo;
              </p>
            </div>
            <span className="text-[11px] text-gospel-muted mt-4 block">
              Take a moment to pause and ponder this truth.
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
