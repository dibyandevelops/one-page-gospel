"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Moon, Sun, Printer, Share2, Check, Compass, Sparkles, AlertTriangle, ChevronDown, MapPin } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export type ViewMode = "narrative" | "bridge" | "tract" | "kids";
export type Translation = "ESV" | "NIV" | "KJV";

interface HeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  translation: Translation;
  setTranslation: (trans: Translation) => void;
}

export function Header({
  viewMode,
  setViewMode,
  translation,
  setTranslation,
}: HeaderProps) {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "One Page Gospel",
          text: "A clear, concise, and beautiful presentation of the Gospel.",
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-gospel-canvas/90 border-b border-gospel-border no-print transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Logo and title */}
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <span className="font-display text-sm sm:text-lg font-extrabold tracking-tight text-gospel-text block leading-none">
              One Page Gospel
            </span>
            <span className="text-[10px] text-gospel-muted hidden sm:block mt-0.5 font-medium">
              The Good News in Plain Words
            </span>
          </div>
        </Link>

        {/* Center View Mode Switcher (Desktop & Tablet) */}
        <nav className="hidden md:flex items-center bg-gospel-surface p-1 rounded-xl border border-gospel-border text-xs font-medium shrink-0">
          {/* 1. The Problem */}
          <Link
            href="/the-problem"
            className={`px-2.5 lg:px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-bold ${
              pathname === "/the-problem"
                ? "bg-rose-500 text-white shadow-sm shadow-rose-500/30"
                : "text-rose-600 dark:text-rose-400 hover:bg-rose-500/10"
            }`}
            title="Why is humanity separated from God?"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
            <span>The Problem</span>
          </Link>

          {/* 2. The Solution (Interactive Cross Artwork) */}
          <button
            onClick={() => setViewMode("bridge")}
            className={`px-2.5 lg:px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              pathname === "/" && viewMode === "bridge"
                ? "bg-gospel-surface-raised text-gospel-text shadow-sm border border-gospel-border-strong font-bold"
                : "text-gospel-muted hover:text-gospel-text"
            }`}
            title="God's answer: Jesus on the Cross"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The Solution</span>
          </button>

          {/* 3. The Full Journey */}
          <button
            onClick={() => setViewMode("narrative")}
            className={`px-2.5 lg:px-3 py-1.5 rounded-lg transition-all ${
              pathname === "/" && viewMode === "narrative"
                ? "bg-gospel-surface-raised text-gospel-text shadow-sm border border-gospel-border-strong font-bold"
                : "text-gospel-muted hover:text-gospel-text"
            }`}
          >
            Journey
          </button>

          {/* 4. 1-Page Summary */}
          <button
            onClick={() => setViewMode("tract")}
            className={`px-2.5 lg:px-3 py-1.5 rounded-lg transition-all ${
              pathname === "/" && viewMode === "tract"
                ? "bg-gospel-surface-raised text-gospel-text shadow-sm border border-gospel-border-strong font-bold"
                : "text-gospel-muted hover:text-gospel-text"
            }`}
          >
            Summary
          </button>

          {/* 5. Kids Storybook */}
          <button
            onClick={() => setViewMode("kids")}
            className={`px-2.5 lg:px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              pathname === "/" && viewMode === "kids"
                ? "bg-amber-500/20 text-amber-700 dark:text-amber-300 shadow-sm border border-amber-500/40 font-bold"
                : "text-gospel-muted hover:text-amber-600 dark:hover:text-amber-400"
            }`}
          >
            <span>Kids</span>
          </button>
        </nav>


        {/* Action controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Translation selector */}
          <div className="flex items-center bg-gospel-surface border border-gospel-border rounded-lg p-0.5 text-xs font-semibold">
            {(["ESV", "NIV", "KJV"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTranslation(t)}
                className={`px-1.5 sm:px-2 py-1 rounded transition-colors text-[11px] sm:text-xs min-w-[26px] sm:min-w-[32px] ${
                  translation === t
                    ? "bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold"
                    : "text-gospel-muted hover:text-gospel-text"
                }`}
                title={`Switch translation to ${t}`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Explore Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/15 text-xs font-bold text-amber-700 dark:text-amber-300 hover:bg-amber-500 hover:text-slate-950 transition-all shadow-sm"
              title="Explore in-depth biblical topics"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">Explore</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${exploreOpen ? "rotate-180" : ""}`} />
            </button>

            {exploreOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-gospel-surface-raised border border-gospel-border-strong shadow-2xl p-2 z-50 animate-fade-in-up">
                <Link
                  href="/the-problem"
                  onClick={() => setExploreOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold hover:bg-rose-500/15 text-rose-600 dark:text-rose-400 transition-colors"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  <span>The Problem</span>
                </Link>
                <Link
                  href="/miracles"
                  onClick={() => setExploreOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold hover:bg-amber-500/15 text-amber-600 dark:text-amber-400 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Miracles of Jesus</span>
                </Link>
                <Link
                  href="/parables"
                  onClick={() => setExploreOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold hover:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Parables &amp; Meaning</span>
                </Link>
                <Link
                  href="/churches"
                  onClick={() => setExploreOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold hover:bg-sky-500/15 text-sky-600 dark:text-sky-400 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>Churches Nearby</span>
                </Link>
                <div className="my-1 border-t border-gospel-border" />
                <Link
                  href="/study"
                  onClick={() => setExploreOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold hover:bg-amber-500/15 text-amber-700 dark:text-amber-300 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                  <span>Full Study Guide</span>
                </Link>
              </div>
            )}
          </div>

          {/* Print Button (desktop only) */}
          <button
            onClick={handlePrint}
            title="Print One-Page Tract"
            className="hidden lg:inline-flex p-2 rounded-lg bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text hover:border-gospel-border-strong transition-all"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            title="Share this Gospel summary"
            className="p-1.5 sm:p-2 rounded-lg bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text hover:border-gospel-border-strong transition-all relative min-h-[34px] min-w-[34px] flex items-center justify-center"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            title="Toggle theme"
            className="p-1.5 sm:p-2 rounded-lg bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text hover:border-gospel-border-strong transition-all min-h-[34px] min-w-[34px] flex items-center justify-center"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Mode Switcher Subnav with touch scroll */}
      <div className="md:hidden px-2 sm:px-3 py-1.5 border-t border-gospel-border flex items-center gap-1.5 bg-gospel-surface/95 backdrop-blur-md text-xs overflow-x-auto no-scrollbar scroll-smooth">
        <Link
          href="/the-problem"
          className={`px-2.5 py-1 rounded-lg text-xs whitespace-nowrap font-bold transition-colors flex items-center gap-1 shrink-0 ${
            pathname === "/the-problem"
              ? "bg-rose-500 text-white shadow-sm"
              : "text-rose-600 dark:text-rose-400 bg-rose-500/15 hover:bg-rose-500 hover:text-white border border-rose-500/30"
          }`}
        >
          <AlertTriangle className="w-3 h-3 text-rose-500" />
          <span>The Problem</span>
        </Link>
        <button
          onClick={() => setViewMode("bridge")}
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 flex items-center gap-1 ${
            pathname === "/" && viewMode === "bridge"
              ? "bg-gospel-surface-raised font-bold text-gospel-text border border-gospel-border-strong shadow-sm"
              : "text-gospel-muted"
          }`}
        >
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>The Solution</span>
        </button>
        <button
          onClick={() => setViewMode("narrative")}
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
            pathname === "/" && viewMode === "narrative"
              ? "bg-gospel-surface-raised font-bold text-gospel-text border border-gospel-border-strong shadow-sm"
              : "text-gospel-muted"
          }`}
        >
          Journey
        </button>
        <button
          onClick={() => setViewMode("tract")}
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
            pathname === "/" && viewMode === "tract"
              ? "bg-gospel-surface-raised font-bold text-gospel-text border border-gospel-border-strong shadow-sm"
              : "text-gospel-muted"
          }`}
        >
          Summary
        </button>
        <button
          onClick={() => setViewMode("kids")}
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1 shrink-0 ${
            pathname === "/" && viewMode === "kids"
              ? "bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/30"
              : "text-gospel-muted hover:text-amber-600 dark:hover:text-amber-400"
          }`}
        >
          <span>Kids 🌟</span>
        </button>
        <Link
          href="/churches"
          className="px-2.5 py-1 rounded-lg text-xs whitespace-nowrap text-sky-700 dark:text-sky-300 bg-sky-500/10 font-bold hover:bg-sky-500 hover:text-slate-950 transition-colors border border-sky-500/30 shrink-0 flex items-center gap-1"
        >
          <MapPin className="w-3 h-3 text-sky-500" />
          <span>Churches</span>
        </Link>
        <Link
          href="/miracles"
          className="px-2.5 py-1 rounded-lg text-xs whitespace-nowrap text-amber-700 dark:text-amber-300 bg-amber-500/10 font-bold hover:bg-amber-500 hover:text-slate-950 transition-colors border border-amber-500/30 shrink-0"
        >
          Miracles
        </Link>
        <Link
          href="/parables"
          className="px-2.5 py-1 rounded-lg text-xs whitespace-nowrap text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 font-bold hover:bg-emerald-500 hover:text-slate-950 transition-colors border border-emerald-500/30 shrink-0"
        >
          Parables
        </Link>
        <Link
          href="/study"
          className="px-2.5 py-1 rounded-lg text-xs whitespace-nowrap text-amber-700 dark:text-amber-300 bg-amber-500/10 font-bold hover:bg-amber-500 hover:text-slate-950 transition-colors border border-amber-500/30 shrink-0"
        >
          Study 📖
        </Link>
      </div>
    </header>
  );
}
