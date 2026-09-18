"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  KIDS_GOSPEL_STEPS,
  KIDS_PRAYER,
  KIDS_ACTION_STEPS,
  type KidGospelStep,
} from "@/lib/kids-gospel-data";
import { Check, Copy, Sparkles, HelpCircle, CheckCircle2, XCircle, Heart, Star } from "lucide-react";

export function KidsJourney() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(KIDS_PRAYER.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 animate-fade-in-up">
      {/* Visual Storybook Banner */}
      <div className="rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl relative bg-black">
        <div className="relative h-72 sm:h-96 w-full">
          <Image
            src="/images/kids-adventure.jpg"
            alt="Kids on an adventure seeing the glowing cross of Jesus"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Floating Kids Welcome Badge */}
          <div className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md border border-amber-400/30 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-amber-300 shadow-lg">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400 animate-spin" />
            <span>KIDS &amp; YOUTH EDITION</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-center sm:text-left">
            <h2 className="font-display text-2xl sm:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight leading-tight">
              The Great Adventure: God&apos;s Big Story For You!
            </h2>
            <p className="text-xs sm:text-base text-amber-100/95 font-medium max-w-xl mt-1.5 sm:mt-2 drop-shadow-md">
              Discover how God made you, loves you, and invites you to be part of His forever family! 🌟
            </p>
          </div>
        </div>
      </div>

      {/* 5 Kids Steps */}
      <div className="space-y-6 sm:space-y-8">
        {KIDS_GOSPEL_STEPS.map((step) => (
          <KidCard key={step.id} step={step} />
        ))}
      </div>

      {/* Kids Prayer Box */}
      <section className="rounded-3xl p-4 sm:p-10 bg-gradient-to-b from-amber-500/10 via-purple-500/5 to-amber-500/10 border border-amber-500/30 shadow-soft-card relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <span className="text-3xl sm:text-4xl mb-2 block">🙏 ✨</span>
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-gospel-text tracking-tight">
            {KIDS_PRAYER.title}
          </h3>
          <p className="text-xs sm:text-sm text-gospel-muted mt-1.5 font-medium">
            {KIDS_PRAYER.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl bg-gospel-surface/90 backdrop-blur-md p-4 sm:p-8 border border-amber-500/40 shadow-xl relative">
          <div className="flex justify-end mb-2">
            <button
              onClick={handleCopy}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all flex items-center gap-1.5 shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Prayer
                </>
              )}
            </button>
          </div>
          <p className="font-serif text-xl sm:text-2xl italic text-gospel-text leading-relaxed text-center">
            &ldquo;{KIDS_PRAYER.text}&rdquo;
          </p>
        </div>

        {/* 4 Action Steps for Kids */}
        <div className="mt-10">
          <h4 className="text-center font-bold text-base text-gospel-text mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>4 Fun Ways to Walk with Jesus Every Day!</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {KIDS_ACTION_STEPS.map((act, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gospel-surface border border-gospel-border hover:border-amber-500/50 hover:scale-105 transition-all text-center flex flex-col items-center justify-between shadow-sm"
              >
                <span className="text-4xl mb-3">{act.emoji}</span>
                <h5 className="font-bold text-sm text-gospel-text mb-1">
                  {act.title}
                </h5>
                <p className="text-xs text-gospel-muted leading-relaxed">{act.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function KidCard({ step }: { step: KidGospelStep }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSelect = (idx: number) => {
    setSelectedAnswer(idx);
    setAnswered(true);
    if (idx === step.quiz.correctIndex) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const isCorrect = selectedAnswer === step.quiz.correctIndex;

  return (
    <article className="rounded-3xl p-4 sm:p-8 bg-gospel-surface border border-gospel-border hover:border-amber-500/40 modern-card-hover shadow-soft-card transition-all duration-300 relative overflow-hidden">
      {/* Floating sparkles */}
      {showConfetti && (
        <div className="absolute top-2 right-2 flex gap-1 animate-bounce text-xl z-20">
          <span>🎉</span>
          <span>⭐</span>
          <span>🎈</span>
          <span>✨</span>
        </div>
      )}

      {/* Top Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-2xl sm:text-3xl shadow-md shrink-0">
          {step.emoji}
        </div>
        <div>
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
            <span>Step 0{step.number}</span>
            <span>•</span>
            <span className="bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px]">
              {step.badge}
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-3xl font-extrabold text-gospel-text mt-0.5 tracking-tight">
            {step.title}
          </h3>
        </div>
      </div>

      {/* Story */}
      <p className="text-sm sm:text-lg text-gospel-text/90 leading-relaxed mb-4 sm:mb-6 font-normal">
        {step.story}
      </p>

      {/* Kid Analogy Card */}
      <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/25 mb-4 sm:mb-6 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1.5 flex items-center gap-1">
          <Heart className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Picture This:
        </span>
        <p className="text-xs sm:text-base text-gospel-text italic leading-relaxed font-normal">
          {step.kidAnalogy}
        </p>
      </div>

      {/* Memory Verse & Fun Fact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {/* Memory Verse */}
        <div className="rounded-2xl p-4 sm:p-5 bg-amber-500/10 border border-amber-500/25 shadow-sm">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Memory Verse
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold text-gospel-text bg-black/10 dark:bg-black/30 px-2 py-0.5 rounded-md">
              {step.memoryVerse.reference}
            </span>
          </div>
          <p className="text-sm sm:text-base italic text-gospel-text leading-relaxed font-normal">
            &ldquo;{step.memoryVerse.text}&rdquo;
          </p>
        </div>

        {/* Fun Fact */}
        <div className="rounded-2xl p-4 sm:p-5 bg-sky-500/10 border border-sky-500/25 flex flex-col justify-center shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1.5 flex items-center gap-1.5">
            🧠 Did You Know?
          </span>
          <p className="text-xs sm:text-sm text-gospel-text leading-relaxed">
            {step.funFact}
          </p>
        </div>
      </div>

      {/* Interactive Pop Quiz */}
      <div className="rounded-2xl p-4 sm:p-5 bg-gospel-surface-raised/80 backdrop-blur-md border border-gospel-border shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-gospel-text">
            Pop Quiz: {step.quiz.question}
          </span>
        </div>

        {/* Options */}
        <div className="space-y-2">
          {step.quiz.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isOptionCorrect = idx === step.quiz.correctIndex;

            let btnClasses =
              "w-full text-left p-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between border min-h-[44px] ";

            if (!answered) {
              btnClasses +=
                "bg-gospel-surface hover:bg-amber-500/15 border-gospel-border text-gospel-text hover:border-amber-400 hover:scale-[1.01]";
            } else if (isOptionCorrect) {
              btnClasses +=
                "bg-emerald-500/25 border-emerald-400 text-emerald-300 font-bold scale-[1.01] shadow-md";
            } else if (isSelected && !isOptionCorrect) {
              btnClasses +=
                "bg-rose-500/25 border-rose-400 text-rose-300";
            } else {
              btnClasses +=
                "bg-gospel-surface border-gospel-border/40 text-gospel-muted opacity-40";
            }

            return (
              <button
                key={idx}
                disabled={answered}
                onClick={() => handleSelect(idx)}
                className={btnClasses}
              >
                <span>{option}</span>
                {answered && isOptionCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                )}
                {answered && isSelected && !isOptionCorrect && (
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Quiz explanation feedback */}
        {answered && (
          <div
            className={`mt-4 p-3.5 rounded-xl text-xs font-medium animate-fade-in-up flex items-start gap-2.5 ${
              isCorrect
                ? "bg-emerald-500/20 text-emerald-200 border border-emerald-500/40"
                : "bg-amber-500/20 text-amber-200 border border-amber-500/40"
            }`}
          >
            <span className="text-xl">{isCorrect ? "🎉" : "💡"}</span>
            <div>
              <p className="font-bold mb-0.5 text-sm">
                {isCorrect ? "Awesome job! You got it right!" : "Almost there!"}
              </p>
              <p>{step.quiz.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
