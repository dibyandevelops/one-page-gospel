"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { MIRACLES_DATA, type MiracleCategory } from "@/lib/miracles-data";
import {
  ArrowLeft,
  Search,
  Sparkles,
  Wind,
  Waves,
  HeartHandshake,
  Eye,
  UserCheck,
  Utensils,
  Sunrise,
  HeartPulse,
  Share2,
  Check,
  Moon,
  Sun,
  Heart,
  BookOpen,
  Compass,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function MiraclesPage() {
  const { resolvedTheme, setTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<MiracleCategory>("all");
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Miracles of Jesus - Signs of the Kingdom",
          text: "Explore the extraordinary miracles of Jesus Christ and what they reveal about His identity as God.",
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

  const handleSpeak = (miracleId: string, textToRead: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (speakingId === miracleId) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    setSpeakingId(miracleId);
    window.speechSynthesis.speak(utterance);
  };

  const filteredMiracles = useMemo(() => {
    return MIRACLES_DATA.filter((m) => {
      const matchesCategory =
        selectedCategory === "all" || m.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        m.title.toLowerCase().includes(q) ||
        m.summary.toLowerCase().includes(q) ||
        m.story.toLowerCase().includes(q) ||
        m.scriptureReference.toLowerCase().includes(q) ||
        m.location.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "nature":
        return "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30";
      case "healing":
        return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30";
      case "provision":
        return "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30";
      case "resurrection":
        return "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30";
      default:
        return "bg-gospel-surface text-gospel-muted border-gospel-border";
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Wind":
        return <Wind className="w-5 h-5 text-sky-500" />;
      case "Waves":
        return <Waves className="w-5 h-5 text-sky-500" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-emerald-500" />;
      case "Eye":
        return <Eye className="w-5 h-5 text-emerald-500" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-emerald-500" />;
      case "Utensils":
        return <Utensils className="w-5 h-5 text-amber-500" />;
      case "Sunrise":
        return <Sunrise className="w-5 h-5 text-rose-500" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-rose-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gospel-canvas text-gospel-text selection:bg-amber-500/20 selection:text-amber-400">
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
              <span className="text-amber-500 font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Miracles
              </span>
              <span>•</span>
              <span>Signs of God&apos;s Kingdom</span>
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
              href="/parables"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-emerald-500 transition-colors"
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

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-10 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-700 dark:text-amber-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Divine Authority &amp; Compassion</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-slate-900 dark:text-white">
            The Miracles of <span className="text-shimmer-gold">Jesus</span>
          </h1>

          <p className="text-base sm:text-xl text-gospel-muted leading-relaxed font-normal">
            Jesus did not perform miracles to show off or win popularity contests. Each sign was a window 
            showing what happens when the God who created the universe steps into our broken world to restore it.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Miracles" },
                { id: "nature", label: "Nature & Storms" },
                { id: "healing", label: "Healing & Compassion" },
                { id: "provision", label: "Provision & Food" },
                { id: "resurrection", label: "Victory Over Death" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as MiracleCategory)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105"
                      : "bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-gospel-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search miracles, scriptures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-gospel-surface border border-gospel-border text-xs focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Miracles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredMiracles.map((miracle) => (
            <div
              key={miracle.id}
              className="rounded-3xl p-6 sm:p-7 bg-gospel-surface border border-gospel-border hover:border-amber-500/40 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gospel-surface-raised border border-gospel-border flex items-center justify-center shrink-0">
                      {renderIcon(miracle.iconName)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-gospel-text leading-tight">
                        {miracle.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-300">
                          {miracle.scriptureReference}
                        </span>
                        <span className="text-gospel-border">•</span>
                        <span className="text-[11px] text-gospel-muted">
                          {miracle.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Category Pill & Audio Listen */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border uppercase tracking-wider ${getCategoryColor(
                        miracle.category
                      )}`}
                    >
                      {miracle.category}
                    </span>
                    <button
                      onClick={() =>
                        handleSpeak(
                          miracle.id,
                          `${miracle.title}. ${miracle.scriptureReference}. ${miracle.story} What this reveals: ${miracle.whatItReveals}`
                        )
                      }
                      title={speakingId === miracle.id ? "Stop audio" : "Listen to miracle story"}
                      className="p-1.5 rounded-lg bg-gospel-surface-raised border border-gospel-border text-gospel-muted hover:text-amber-500 transition-colors"
                    >
                      {speakingId === miracle.id ? (
                        <VolumeX className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Summary Quote */}
                <p className="text-xs sm:text-sm font-semibold text-amber-800 dark:text-amber-200/90 mb-4 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                  &ldquo;{miracle.summary}&rdquo;
                </p>

                {/* Story Narrative */}
                <p className="text-xs sm:text-sm text-gospel-muted leading-relaxed mb-5">
                  {miracle.story}
                </p>

                {/* What it Reveals Box */}
                <div className="p-4 rounded-2xl bg-gospel-surface-raised border border-gospel-border mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                    What This Reveals About Jesus
                  </span>
                  <p className="text-xs sm:text-sm text-gospel-text leading-relaxed">
                    {miracle.whatItReveals}
                  </p>
                </div>
              </div>

              {/* Practical Takeaway Pill */}
              <div className="pt-4 border-t border-gospel-border mt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                  💡 Takeaway For Your Life
                </span>
                <p className="text-xs text-gospel-muted leading-relaxed font-medium">
                  {miracle.takeaway}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Theological Purpose Section */}
        <section className="rounded-3xl p-8 sm:p-12 bg-gospel-surface border border-gospel-border shadow-md mb-16 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400 mb-2 block">
            The Purpose of the Signs
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gospel-text mb-4">
            &ldquo;These are written that you may believe...&rdquo;
          </h2>
          <blockquote className="text-sm sm:text-base italic text-gospel-muted max-w-2xl mx-auto mb-6 leading-relaxed">
            &ldquo;Now Jesus did many other signs in the presence of the disciples, which are not written in this book; but these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name.&rdquo;
            <span className="block mt-2 font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
              — John 20:30–31
            </span>
          </blockquote>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#cross"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md hover:scale-105 transition-all"
            >
              <span>Explore The Greatest Miracle: The Resurrection</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gospel-border bg-gospel-surface/60 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gospel-muted">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-gospel-text hover:text-amber-500 transition-colors">
              One Page Gospel
            </Link>
            <span>•</span>
            <span>Miracles of Jesus</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/the-problem" className="hover:text-rose-500 transition-colors">The Problem</Link>
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
