"use client";

import React, { useState } from "react";
import {
  KIDS_GOSPEL_STEPS,
  KIDS_PRAYER,
  KIDS_ACTION_STEPS,
  type KidGospelStep,
} from "@/lib/kids-gospel-data";
import { Check, Copy, Sparkles, HelpCircle, CheckCircle2, XCircle } from "lucide-react";

export function KidsJourney() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(KIDS_PRAYER.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10 animate-fade-in-up">
      {/* Kids Banner */}
      <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-amber-500/15 via-sky-500/10 to-emerald-500/15 border-2 border-amber-500/30 text-center relative overflow-hidden">
        <span className="text-3xl sm:text-4xl mb-2 block">🌟 🎈 🚀</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-gospel-text tracking-tight">
          The Great Adventure: God&apos;s Big Story For You!
        </h2>
        <p className="text-sm sm:text-base text-gospel-muted mt-2 max-w-xl mx-auto font-medium">
          Get ready to discover how the King of the Universe made you, loves you, and invites you to be part of His forever family!
        </p>
      </div>

      {/* 5 Kids Steps */}
      <div className="space-y-8">
        {KIDS_GOSPEL_STEPS.map((step) => (
          <KidCard key={step.id} step={step} />
        ))}
      </div>

      {/* Kids Prayer Box */}
      <section className="rounded-2xl p-6 sm:p-10 bg-gradient-to-b from-amber-500/10 to-amber-500/5 border-2 border-amber-500/40 shadow-soft-card">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-4xl mb-2 block">🙏 ✨</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gospel-text">
            {KIDS_PRAYER.title}
          </h3>
          <p className="text-xs sm:text-sm text-gospel-muted mt-1">
            {KIDS_PRAYER.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl bg-gospel-surface p-6 sm:p-8 border border-amber-500/30 shadow-inner relative">
          <div className="flex justify-end mb-2">
            <button
              onClick={handleCopy}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Prayer
                </>
              )}
            </button>
          </div>
          <p className="font-serif text-lg sm:text-xl italic text-gospel-text leading-relaxed text-center">
            &ldquo;{KIDS_PRAYER.text}&rdquo;
          </p>
        </div>

        {/* 4 Action Steps for Kids */}
        <div className="mt-10">
          <h4 className="text-center font-bold text-base text-gospel-text mb-6">
            🎉 4 Fun Ways to Walk with Jesus Every Day!
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {KIDS_ACTION_STEPS.map((act, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-gospel-surface border border-gospel-border text-center flex flex-col items-center justify-between"
              >
                <span className="text-3xl mb-2">{act.emoji}</span>
                <h5 className="font-bold text-xs sm:text-sm text-gospel-text mb-1">
                  {act.title}
                </h5>
                <p className="text-xs text-gospel-muted">{act.text}</p>
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

  const handleSelect = (idx: number) => {
    setSelectedAnswer(idx);
    setAnswered(true);
  };

  const isCorrect = selectedAnswer === step.quiz.correctIndex;

  return (
    <article className="rounded-2xl p-6 sm:p-8 bg-gospel-surface border-2 border-gospel-border hover:border-amber-500/50 shadow-soft-card transition-all duration-300">
      {/* Top Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center text-3xl shadow-sm shrink-0">
          {step.emoji}
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
            <span>Step {step.number}</span>
            <span>•</span>
            <span className="bg-amber-500/15 px-2 py-0.5 rounded-full text-[11px]">
              {step.badge}
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gospel-text mt-0.5">
            {step.title}
          </h3>
        </div>
      </div>

      {/* Story */}
      <p className="text-base sm:text-lg text-gospel-text leading-relaxed mb-6 font-normal">
        {step.story}
      </p>

      {/* Kid Analogy Card */}
      <div className="rounded-xl p-4 sm:p-5 bg-gospel-surface-raised border border-gospel-border-strong mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">
          💡 Picture This:
        </span>
        <p className="text-sm sm:text-base text-gospel-text/90 italic font-serif">
          {step.kidAnalogy}
        </p>
      </div>

      {/* Memory Verse & Fun Fact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Memory Verse */}
        <div className="rounded-xl p-4 bg-amber-500/10 border border-amber-500/25">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Memory Verse
            </span>
            <span className="text-xs font-mono font-bold text-gospel-text">
              {step.memoryVerse.reference}
            </span>
          </div>
          <p className="font-serif text-sm sm:text-base italic text-gospel-text">
            &ldquo;{step.memoryVerse.text}&rdquo;
          </p>
        </div>

        {/* Fun Fact */}
        <div className="rounded-xl p-4 bg-sky-500/10 border border-sky-500/25 flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
            🧠 Did You Know?
          </span>
          <p className="text-xs sm:text-sm text-gospel-text/90">
            {step.funFact}
          </p>
        </div>
      </div>

      {/* Interactive Pop Quiz */}
      <div className="rounded-xl p-4 sm:p-5 bg-gospel-surface-raised/80 border border-gospel-border">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-4 h-4 text-amber-500" />
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
              "w-full text-left p-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ";

            if (!answered) {
              btnClasses +=
                "bg-gospel-surface hover:bg-amber-500/10 border-gospel-border text-gospel-text hover:border-amber-500/40";
            } else if (isOptionCorrect) {
              btnClasses +=
                "bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold";
            } else if (isSelected && !isOptionCorrect) {
              btnClasses +=
                "bg-rose-500/20 border-rose-500 text-rose-400";
            } else {
              btnClasses +=
                "bg-gospel-surface border-gospel-border/40 text-gospel-muted opacity-50";
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
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                )}
                {answered && isSelected && !isOptionCorrect && (
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Quiz explanation feedback */}
        {answered && (
          <div
            className={`mt-3 p-3 rounded-lg text-xs font-medium animate-fade-in-up ${
              isCorrect
                ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
            }`}
          >
            <p className="font-bold mb-0.5">
              {isCorrect ? "🎉 Great job! You got it right!" : "💡 Almost there!"}
            </p>
            <p>{step.quiz.explanation}</p>
          </div>
        )}
      </div>
    </article>
  );
}
