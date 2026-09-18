"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PARABLES_DATA, type ParableTheme } from "@/lib/parables-data";
import {
  ArrowLeft,
  Search,
  Compass,
  Sparkles,
  Heart,
  BookOpen,
  Share2,
  Check,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  HelpCircle,
  Tag,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function ParablesPage() {
  const { resolvedTheme, setTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<ParableTheme>("all");
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Parables of Jesus & Their Heavenly Meaning",
          text: "Discover the timeless stories Jesus told and the transformative truths hidden within them.",
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

  const handleSpeak = (parableId: string, textToRead: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (speakingId === parableId) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    setSpeakingId(parableId);
    window.speechSynthesis.speak(utterance);
  };

  const filteredParables = useMemo(() => {
    return PARABLES_DATA.filter((p) => {
      const matchesTheme =
        selectedTheme === "all" || p.theme === selectedTheme;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.hookSummary.toLowerCase().includes(q) ||
        p.story.toLowerCase().includes(q) ||
        p.spiritualMeaning.toLowerCase().includes(q) ||
        p.scriptureReference.toLowerCase().includes(q);
      return matchesTheme && matchesSearch;
    });
  }, [selectedTheme, searchQuery]);

  const getThemeBadge = (theme: string) => {
    switch (theme) {
      case "grace":
        return "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30";
      case "kingdom":
        return "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30";
      case "humility":
        return "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30";
      case "faithfulness":
        return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30";
      default:
        return "bg-gospel-surface text-gospel-muted border-gospel-border";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gospel-canvas text-gospel-text selection:bg-emerald-500/20 selection:text-emerald-400">
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
              <span className="text-emerald-500 font-bold flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" />
                Parables
              </span>
              <span>•</span>
              <span>Heavenly Meaning</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/the-problem"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-rose-500 transition-colors"
            >
              <span>The Problem</span>
            </Link>
            <Link
              href="/miracles"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-amber-500 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Miracles</span>
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
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-10 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Earthly Stories with Heavenly Meaning</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-slate-900 dark:text-white">
            The Parables of <span className="text-emerald-500">Jesus</span>
          </h1>

          <p className="text-base sm:text-xl text-gospel-muted leading-relaxed font-normal">
            Jesus was the master storyteller. Using seeds, sheep, coins, fathers, and banquets, 
            He bypassed religious defenses to reveal the surprising nature of God&apos;s heart, grace, and eternal Kingdom.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Theme Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Parables" },
                { id: "grace", label: "Grace & Forgiveness" },
                { id: "kingdom", label: "The Kingdom of God" },
                { id: "humility", label: "Humility & Repentance" },
                { id: "faithfulness", label: "Faithful Living" },
              ].map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id as ParableTheme)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all ${
                    selectedTheme === theme.id
                      ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 scale-105"
                      : "bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text"
                  }`}
                >
                  {theme.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-gospel-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search parables, themes, symbols..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-gospel-surface border border-gospel-border text-xs focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Parables Feed */}
        <div className="space-y-8 mb-16">
          {filteredParables.map((parable) => (
            <div
              key={parable.id}
              className="rounded-3xl p-6 sm:p-9 bg-gospel-surface border border-gospel-border hover:border-emerald-500/40 transition-all shadow-sm"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-gospel-border">
                <div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border uppercase tracking-wider ${getThemeBadge(parable.theme)}`}>
                    {parable.theme}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gospel-text mt-2">
                    {parable.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/30">
                    {parable.scriptureReference}
                  </span>

                  <button
                    onClick={() =>
                      handleSpeak(
                        parable.id,
                        `${parable.title}. ${parable.scriptureReference}. ${parable.story} Heavenly Meaning: ${parable.spiritualMeaning}`
                      )
                    }
                    title={speakingId === parable.id ? "Stop audio" : "Listen to parable"}
                    className="p-1.5 rounded-lg bg-gospel-surface-raised border border-gospel-border text-gospel-muted hover:text-emerald-500 transition-colors"
                  >
                    {speakingId === parable.id ? (
                      <VolumeX className="w-4 h-4 text-emerald-500 animate-pulse" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Hook Quote */}
              <p className="text-sm sm:text-base font-semibold text-emerald-800 dark:text-emerald-200/90 mb-5 bg-emerald-500/10 p-3.5 rounded-2xl border border-emerald-500/20">
                &ldquo;{parable.hookSummary}&rdquo;
              </p>

              {/* Context Callout */}
              <div className="text-xs text-gospel-muted italic mb-5 pl-3 border-l-2 border-amber-500/50">
                <strong>Historical Context:</strong> {parable.context}
              </div>

              {/* The Narrative Story */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gospel-muted mb-2">
                  The Story in Plain Words
                </h4>
                <p className="text-sm sm:text-base text-gospel-text leading-relaxed">
                  {parable.story}
                </p>
              </div>

              {/* Symbols Decoder Grid */}
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gospel-surface-raised border border-gospel-border">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Decoding the Symbols</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {parable.symbols.map((sym, sIdx) => (
                    <div key={sIdx} className="text-xs p-2.5 rounded-xl bg-gospel-surface border border-gospel-border">
                      <span className="font-bold text-gospel-text block">{sym.symbol}:</span>
                      <span className="text-gospel-muted">{sym.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spiritual Meaning */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-amber-500/10 border border-emerald-500/30 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 block mb-1.5">
                  The Heavenly Meaning
                </span>
                <p className="text-sm sm:text-base text-gospel-text leading-relaxed font-medium">
                  {parable.spiritualMeaning}
                </p>
                <div className="mt-3 pt-3 border-t border-emerald-500/20 text-xs text-gospel-muted">
                  <strong>Daily Application:</strong> {parable.modernApplication}
                </div>
              </div>

              {/* Reflection Question */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-gospel-surface-raised border border-gospel-border text-xs sm:text-sm">
                <HelpCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-gospel-text font-medium">
                  <strong className="text-amber-600 dark:text-amber-400 mr-1">Reflection:</strong>
                  {parable.reflectionQuestion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <section className="rounded-3xl p-8 sm:p-12 bg-gospel-surface border border-gospel-border shadow-md text-center max-w-4xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gospel-text mb-4">
            The Greatest Story Ever Told
          </h2>
          <p className="text-sm sm:text-base text-gospel-muted max-w-2xl mx-auto mb-6 leading-relaxed">
            All the parables of Jesus point to the reality of God&apos;s love: He seeks the lost, welcomes the broken home, and invites you into His eternal family.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md hover:scale-105 transition-all"
            >
              <span>Explore The Full Gospel Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gospel-border bg-gospel-surface/60 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gospel-muted">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-gospel-text hover:text-emerald-500 transition-colors">
              One Page Gospel
            </Link>
            <span>•</span>
            <span>Parables &amp; Meanings</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/the-problem" className="hover:text-rose-500 transition-colors">The Problem</Link>
            <Link href="/miracles" className="hover:text-amber-500 transition-colors">Miracles</Link>
            <Link href="/study" className="hover:text-emerald-500 transition-colors">Study Guide</Link>
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
