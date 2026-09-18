"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Moon, Sun, Printer, Share2, Check, Compass, Sparkles } from "lucide-react";
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
  const { resolvedTheme, setTheme } = useTheme();
  const [copied, setCopied] = useState(false);

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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-gospel-canvas/85 border-b border-gospel-border no-print transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo and title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-gospel-text flex items-center gap-2">
              One Page Gospel
            </h1>
            <p className="text-xs text-gospel-muted hidden sm:block">
              The Good News in Clarity and Truth
            </p>
          </div>
        </div>

        {/* Center View Mode Switcher */}
        <nav className="hidden md:flex items-center bg-gospel-surface p-1 rounded-xl border border-gospel-border text-xs font-medium">
          <button
            onClick={() => setViewMode("narrative")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "narrative"
                ? "bg-gospel-surface-raised text-gospel-text shadow-sm border border-gospel-border-strong font-semibold"
                : "text-gospel-muted hover:text-gospel-text"
            }`}
          >
            Guided Journey
          </button>
          <button
            onClick={() => setViewMode("bridge")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === "bridge"
                ? "bg-gospel-surface-raised text-gospel-text shadow-sm border border-gospel-border-strong font-semibold"
                : "text-gospel-muted hover:text-gospel-text"
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-amber-500" />
            The Bridge
          </button>
          <button
            onClick={() => setViewMode("tract")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "tract"
                ? "bg-gospel-surface-raised text-gospel-text shadow-sm border border-gospel-border-strong font-semibold"
                : "text-gospel-muted hover:text-gospel-text"
            }`}
          >
            1-Page Summary
          </button>
          <button
            onClick={() => setViewMode("kids")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === "kids"
                ? "bg-amber-500/20 text-amber-500 dark:text-amber-400 shadow-sm border border-amber-500/40 font-bold"
                : "text-gospel-muted hover:text-amber-500"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Kids Edition
          </button>
        </nav>

        {/* Action controls */}
        <div className="flex items-center gap-2">
          {/* Translation selector */}
          <div className="flex items-center bg-gospel-surface border border-gospel-border rounded-lg p-0.5 text-xs font-semibold">
            {(["ESV", "NIV", "KJV"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTranslation(t)}
                className={`px-2 py-1 rounded transition-colors ${
                  translation === t
                    ? "bg-amber-500/20 text-amber-500 dark:text-amber-400 font-bold"
                    : "text-gospel-muted hover:text-gospel-text"
                }`}
                title={`Switch translation to ${t}`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Study Guide Link */}
          <Link
            href="/study"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 text-xs font-bold text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all shadow-sm"
            title="In-depth theological study and original language lexicon"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Study Guide</span>
          </Link>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            title="Print One-Page Tract"
            className="p-2 rounded-lg bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text hover:border-gospel-border-strong transition-all"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            title="Share this Gospel summary"
            className="p-2 rounded-lg bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text hover:border-gospel-border-strong transition-all relative"
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
            className="p-2 rounded-lg bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text hover:border-gospel-border-strong transition-all"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Mode Switcher Subnav */}
      <div className="md:hidden px-4 py-2 border-t border-gospel-border/50 flex items-center justify-around bg-gospel-surface/50 text-xs">
        <button
          onClick={() => setViewMode("narrative")}
          className={`px-2.5 py-1 rounded-md ${
            viewMode === "narrative"
              ? "bg-gospel-surface-raised font-bold text-gospel-text"
              : "text-gospel-muted"
          }`}
        >
          Journey
        </button>
        <button
          onClick={() => setViewMode("bridge")}
          className={`px-2.5 py-1 rounded-md ${
            viewMode === "bridge"
              ? "bg-gospel-surface-raised font-bold text-gospel-text"
              : "text-gospel-muted"
          }`}
        >
          The Bridge
        </button>
        <button
          onClick={() => setViewMode("tract")}
          className={`px-2.5 py-1 rounded-md ${
            viewMode === "tract"
              ? "bg-gospel-surface-raised font-bold text-gospel-text"
              : "text-gospel-muted"
          }`}
        >
          Summary
        </button>
        <button
          onClick={() => setViewMode("kids")}
          className={`px-2.5 py-1 rounded-md flex items-center gap-1 ${
            viewMode === "kids"
              ? "bg-amber-500/20 text-amber-500 font-bold"
              : "text-gospel-muted hover:text-amber-500"
          }`}
        >
          <span>Kids 🌟</span>
        </button>
        <Link
          href="/study"
          className="px-2.5 py-1 rounded-md text-amber-400 hover:text-amber-300 font-semibold"
        >
          Study 📖
        </Link>
      </div>
    </header>
  );
}
