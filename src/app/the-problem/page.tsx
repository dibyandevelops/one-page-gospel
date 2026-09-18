"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PROBLEM_SECTIONS,
  SELF_CHECK_QUESTIONS,
} from "@/lib/problem-data";
import {
  ArrowLeft,
  AlertTriangle,
  Flame,
  ShieldAlert,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Share2,
  Check,
  Moon,
  Sun,
  Heart,
  Sparkles,
  Compass,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function TheProblemPage() {
  const { resolvedTheme, setTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("rebellion");
  const [checklistAnswers, setChecklistAnswers] = useState<Record<number, boolean>>({});

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Problem - Understanding Humanity's Need for a Savior",
          text: "Why is the world broken? An honest, compassionate look at the human condition.",
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback
      }
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCheck = (idx: number) => {
    setChecklistAnswers((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkedCount = Object.values(checklistAnswers).filter(Boolean).length;

  return (
    <div className="min-h-screen flex flex-col bg-gospel-canvas text-gospel-text selection:bg-rose-500/20 selection:text-rose-400">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-gospel-canvas/90 border-b border-gospel-border transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-gospel-text hover:border-amber-500/40 transition-all shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Gospel Home</span>
            </Link>
            <div className="hidden sm:block h-4 w-px bg-gospel-border" />
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gospel-muted">
              <span className="text-rose-500 font-bold flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                The Problem
              </span>
              <span>•</span>
              <span>Humanity&apos;s Need</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/miracles"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-amber-500 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Miracles</span>
            </Link>
            <Link
              href="/parables"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-amber-500 transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-emerald-500" />
              <span>Parables</span>
            </Link>
            <Link
              href="/study"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-xs font-bold text-amber-700 dark:text-amber-300 hover:bg-amber-500 hover:text-slate-950 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Study Guide</span>
            </Link>

            <button
              onClick={handleShare}
              title="Share this page"
              className="p-2 rounded-xl bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text transition-colors relative"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              title="Toggle theme"
              className="p-2 rounded-xl bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text transition-colors"
            >
              {resolvedTheme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 w-full pt-10 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-bold text-rose-600 dark:text-rose-400 mb-6">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>The Essential Diagnosis</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-slate-900 dark:text-white">
            The Problem: <span className="text-rose-500">Why Are We Broken?</span>
          </h1>

          <p className="text-base sm:text-xl text-gospel-muted leading-relaxed font-normal">
            Before we can appreciate a rescue, we have to understand what we are being rescued from. 
            Here is an honest, compassionate look at why human effort alone cannot heal our hearts or bridge the gap to a holy God.
          </p>
        </div>

        {/* Diagnostic Self-Check Card */}
        <section className="rounded-3xl p-6 sm:p-8 bg-gospel-surface border border-rose-500/30 shadow-xl mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-500 flex items-center justify-center font-bold">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gospel-text">
                The &ldquo;Good Person&rdquo; Self-Assessment
              </h2>
              <p className="text-xs sm:text-sm text-gospel-muted">
                Most people believe they are good enough for heaven. Let&apos;s see how we measure up to God&apos;s standard:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {[
              "Have you ever told a lie (even a small white lie)?",
              "Have you ever taken anything that wasn't yours (time, software, office supplies)?",
              "Have you ever looked with lust? (Jesus called this adultery of heart in Matt 5:28)",
              "Have you ever harbored bitter hatred or anger? (Jesus called this heart murder in 1 John 3:15)",
              "Have you always loved God with 100% of your heart, mind, and strength every second?",
              "Have you ever used God's holy name casually or as a swear word?",
            ].map((question, idx) => (
              <button
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 ${
                  checklistAnswers[idx]
                    ? "bg-rose-500/15 border-rose-500/50 text-rose-700 dark:text-rose-300 font-semibold"
                    : "bg-gospel-surface-raised border-gospel-border text-gospel-text hover:border-rose-500/30"
                }`}
              >
                <span className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 text-xs ${
                  checklistAnswers[idx] ? "bg-rose-500 border-rose-500 text-white" : "border-gospel-border"
                }`}>
                  {checklistAnswers[idx] && "✓"}
                </span>
                <span>{question}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-gospel-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-gospel-muted">
              {checkedCount > 0 ? (
                <span>
                  By our own admission, we have broken God&apos;s holy laws. In a court of law, we would be found guilty.
                </span>
              ) : (
                <span>Click the questions above that apply to you honestly.</span>
              )}
            </p>
            <div className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-700 dark:text-rose-300 text-xs font-bold whitespace-nowrap">
              Romans 3:23: &ldquo;All have sinned&rdquo;
            </div>
          </div>
        </section>

        {/* Problem Breakdown Sections */}
        <section className="space-y-8 mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {PROBLEM_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`text-xs px-4 py-2 rounded-xl font-bold transition-all ${
                  activeTab === sec.id
                    ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20"
                    : "bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text"
                }`}
              >
                {sec.title.split(":")[0]}
              </button>
            ))}
          </div>

          {PROBLEM_SECTIONS.map((sec) => {
            const isSelected = activeTab === sec.id;
            if (!isSelected) return null;

            return (
              <div
                key={sec.id}
                className="rounded-3xl p-6 sm:p-10 bg-gospel-surface border border-gospel-border shadow-md animate-fade-in-up"
              >
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest font-bold text-rose-500 mb-2 block">
                    {sec.subtitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-gospel-text">
                    {sec.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gospel-muted mt-3 leading-relaxed">
                    {sec.summary}
                  </p>
                </div>

                {/* Key Scripture Quote */}
                <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gospel-surface-raised border-l-4 border-rose-500">
                  <p className="text-base sm:text-lg italic text-gospel-text mb-1">
                    &ldquo;{sec.keyVerse.text}&rdquo;
                  </p>
                  <span className="text-xs font-mono font-bold text-rose-500">
                    — {sec.keyVerse.reference}
                  </span>
                </div>

                {/* Deep Dive Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {sec.points.map((pt, pIdx) => (
                    <div key={pIdx} className="p-4 rounded-2xl bg-gospel-surface-raised border border-gospel-border">
                      <h4 className="font-bold text-sm text-gospel-text mb-1.5 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        {pt.heading}
                      </h4>
                      <p className="text-xs sm:text-sm text-gospel-muted leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Real World Analogy Box */}
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 mt-6">
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Helpful Picture: {sec.realWorldAnalogy.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gospel-text leading-relaxed">
                    {sec.realWorldAnalogy.analogy}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* Questions & Misconceptions Accordion */}
        <section className="rounded-3xl p-6 sm:p-8 bg-gospel-surface border border-gospel-border mb-16">
          <div className="flex items-center gap-2.5 mb-6">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            <h3 className="font-display text-2xl font-bold text-gospel-text">
              Common Questions About Sin &amp; God&apos;s Justice
            </h3>
          </div>

          <div className="space-y-4">
            {SELF_CHECK_QUESTIONS.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-gospel-surface-raised border border-gospel-border">
                <h4 className="font-bold text-base text-gospel-text mb-2">
                  &ldquo;{item.question}&rdquo;
                </h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="text-gospel-muted">
                    <strong className="text-rose-500">Common Human Thinking:</strong> {item.humanThinking}
                  </p>
                  <p className="text-gospel-text">
                    <strong className="text-emerald-500">The Biblical Reality:</strong> {item.biblicalReality}
                  </p>
                  <p className="text-[11px] font-mono font-semibold text-amber-600 dark:text-amber-400 pt-1">
                    {item.verse}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Call to Hope / Cross the Bridge */}
        <section className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-amber-500/20 via-rose-500/10 to-emerald-500/20 border-2 border-amber-500/40 text-center relative overflow-hidden shadow-2xl">
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-gospel-text mb-4">
            The Bad News Makes the Good News Sweet
          </h3>
          <p className="text-base sm:text-lg text-gospel-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            You don&apos;t have to stay stuck in guilt, anxiety, or separation. Jesus took the full punishment for your sin on the cross and rose again to give you a brand new life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#cross"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/30 hover:scale-105 transition-all"
            >
              <span>See How Jesus Bridges the Gap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#prayer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gospel-surface border border-gospel-border text-sm font-bold text-gospel-text hover:border-amber-500/50 transition-all"
            >
              <span>Accept Jesus in Prayer</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gospel-border bg-gospel-surface/60 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gospel-muted">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-gospel-text hover:text-amber-500 transition-colors">
              One Page Gospel
            </Link>
            <span>•</span>
            <span>The Problem</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/miracles" className="hover:text-amber-500 transition-colors">Miracles</Link>
            <Link href="/parables" className="hover:text-amber-500 transition-colors">Parables</Link>
            <Link href="/study" className="hover:text-amber-500 transition-colors">Study Guide</Link>
          </div>
          <div className="flex items-center gap-1">
            <span>Made with reverence</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </footer>
    </div>
  );
}
