"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import type { GospelStep } from "@/lib/gospel-data";
import type { Translation } from "./Header";

interface SectionCardProps {
  step: GospelStep;
  translation: Translation;
}

export function SectionCard({ step, translation }: SectionCardProps) {
  const [showMoreVerses, setShowMoreVerses] = useState(false);

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

  const getBorderColor = () => {
    switch (step.themeColor) {
      case "emerald":
        return "hover:border-emerald-500/40 focus-within:border-emerald-500/50";
      case "crimson":
        return "hover:border-rose-500/40 focus-within:border-rose-500/50";
      case "gold":
        return "hover:border-amber-500/50 focus-within:border-amber-500/60";
      case "blue":
        return "hover:border-sky-500/40 focus-within:border-sky-500/50";
      case "amber":
        return "hover:border-amber-500/40 focus-within:border-amber-500/50";
    }
  };

  return (
    <article
      id={step.id}
      className={`rounded-app-lg p-6 sm:p-8 bg-gospel-surface border border-gospel-border shadow-soft-card transition-all duration-300 ${getBorderColor()}`}
    >
      {/* Header section */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gospel-surface-raised border border-gospel-border-strong flex items-center justify-center shadow-inner">
            {renderIcon()}
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-gospel-muted flex items-center gap-2">
              <span>Point 0{step.number}</span>
              <span>•</span>
              <span className="text-gospel-text/70">{step.subtitle}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gospel-text mt-0.5">
              {step.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Main explanation paragraph */}
      <p className="text-base sm:text-lg text-gospel-text/90 leading-relaxed font-normal mb-6">
        {step.summary}
      </p>

      {/* Key Scripture Quote Block */}
      <div className="relative overflow-hidden rounded-app bg-gospel-surface-raised/70 border border-gospel-border-strong/70 p-5 sm:p-6 mb-6">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
            <BookMarked className="w-3.5 h-3.5" />
            Key Scripture ({translation})
          </span>
          <span className="text-xs font-semibold text-gospel-muted font-mono">
            {step.keyVerse.reference}
          </span>
        </div>

        <blockquote className="font-serif text-lg sm:text-xl italic text-gospel-text leading-relaxed pl-3 border-l-2 border-amber-500/60 my-2">
          &ldquo;{step.keyVerse.translations[translation]}&rdquo;
        </blockquote>

        {step.keyVerse.contextNote && (
          <p className="text-xs text-gospel-muted mt-3 italic pl-3">
            💡 {step.keyVerse.contextNote}
          </p>
        )}

        {/* Supplementary verses toggle */}
        {step.supplementaryVerses && step.supplementaryVerses.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gospel-border/50">
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
              <div className="mt-3 space-y-3 pl-2 border-l border-gospel-border-strong animate-fade-in-up">
                {step.supplementaryVerses.map((sv, idx) => (
                  <div key={idx} className="text-sm">
                    <p className="font-semibold text-xs text-gospel-text/80 font-mono mb-0.5">
                      {sv.reference}
                    </p>
                    <p className="text-gospel-muted italic">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Takeaway points */}
        <div className="rounded-xl p-4 bg-gospel-surface-raised/40 border border-gospel-border/60">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gospel-muted mb-2.5">
            Key Insights
          </h3>
          <ul className="space-y-2">
            {step.takeawayPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gospel-text/85">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Personal Reflection */}
        <div className="rounded-xl p-4 bg-amber-500/5 border border-amber-500/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              Heart Reflection
            </div>
            <p className="text-sm italic text-gospel-text font-serif">
              &ldquo;{step.reflectionQuestion}&rdquo;
            </p>
          </div>
          <span className="text-[11px] text-gospel-muted mt-3 block">
            Take a moment to pause and ponder this truth.
          </span>
        </div>
      </div>
    </article>
  );
}
