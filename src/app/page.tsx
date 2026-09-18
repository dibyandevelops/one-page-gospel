"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header, type ViewMode, type Translation } from "@/components/gospel/Header";
import { SectionCard } from "@/components/gospel/SectionCard";
import { BridgeIllustration } from "@/components/gospel/BridgeIllustration";
import { PrayerSection } from "@/components/gospel/PrayerSection";
import { PrintableTract } from "@/components/gospel/PrintableTract";
import { VideoSection } from "@/components/gospel/VideoSection";
import { KidsJourney } from "@/components/gospel/KidsJourney";
import { Footer } from "@/components/gospel/Footer";
import { GOSPEL_STEPS } from "@/lib/gospel-data";
import { BookMarked, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export default function HomePage() {
  const [viewMode, setViewMode] = useState<ViewMode>("narrative");
  const [translation, setTranslation] = useState<Translation>("ESV");

  return (
    <div className="min-h-screen flex flex-col bg-gospel-canvas text-gospel-text relative selection:bg-amber-500/20 selection:text-amber-400">
      {/* Sticky Header */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        translation={translation}
        setTranslation={setTranslation}
      />

      {/* Main Content Area */}
      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 w-full pt-6 sm:pt-10 pb-20 relative z-10">
        {/* Ambient Glow Backdrop behind Hero */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[380px] bg-gradient-to-b from-amber-500/15 via-sky-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="text-center pt-4 sm:pt-8 pb-10 max-w-3xl mx-auto no-print relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 backdrop-blur-md border border-border shadow-sm text-xs font-semibold tracking-wide mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-700 dark:text-amber-300 font-bold">
              {viewMode === "kids" ? "Kids & Family Adventure" : "The Good News"}
            </span>
            <span className="text-gospel-border">•</span>
            <span className="text-gospel-muted">
              {viewMode === "kids" ? "Storybook Edition" : "Simple • Clear • Life-Changing"}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in-up text-slate-900 dark:text-white">
            {viewMode === "kids" ? (
              <>
                God&apos;s Big Story <span className="text-shimmer-gold">For You!</span>
              </>
            ) : (
              <>
                The Gospel in <span className="text-shimmer-gold">One Page</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-xl text-gospel-muted leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up font-normal">
            {viewMode === "kids"
              ? "An exciting visual story discovering how God made you, loves you, and invites you into His forever family."
              : "The greatest message in the world: how a loving God rescues us and brings us home into His family through Jesus Christ."}
          </p>

          {/* Mode Switch Helper Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {viewMode !== "kids" ? (
              <button
                onClick={() => setViewMode("kids")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-amber-500/15 border border-amber-500/40 text-xs font-bold text-amber-800 dark:text-amber-300 hover:border-amber-500 hover:scale-105 transition-all shadow-sm"
              >
                <span>🌟 Switch to Kid-Friendly Edition</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => setViewMode("narrative")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-gospel-text hover:border-amber-500/40 transition-all shadow-sm"
              >
                <span>← Back to Standard Journey</span>
              </button>
            )}

            <button
              onClick={() => setViewMode(viewMode === "bridge" ? "narrative" : "bridge")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all ${
                viewMode === "bridge"
                  ? "bg-amber-500 text-slate-950 border-amber-400 font-extrabold shadow-glow-gold"
                  : "bg-gospel-surface border-gospel-border text-gospel-muted hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40"
              }`}
            >
              <span>Explore The Bridge Artwork</span>
            </button>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium text-gospel-muted">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface/80 backdrop-blur-md border border-gospel-border shadow-sm">
              <BookMarked className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>5 Simple Truths</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface/80 backdrop-blur-md border border-gospel-border shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Scripture in {translation}</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface/80 backdrop-blur-md border border-gospel-border shadow-sm">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
              <span>For All Ages</span>
            </span>
          </div>

          {/* Modern Floating Timeline Jump Bar (Narrative Mode) */}
          {viewMode === "narrative" && (
            <div className="mt-8 pt-6 border-t border-gospel-border/60 flex flex-wrap items-center justify-center gap-2">
              <span className="text-[11px] text-gospel-muted uppercase font-bold tracking-wider mr-1 hidden sm:inline">
                Jump to:
              </span>
              {GOSPEL_STEPS.map((step) => (
                <a
                  key={step.id}
                  href={`#${step.id}`}
                  className="px-3 py-1.5 rounded-xl bg-gospel-surface/80 backdrop-blur-sm border border-gospel-border hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-300 text-xs font-semibold transition-all"
                >
                  <span className="text-amber-600 dark:text-amber-400 font-bold mr-1">{step.number}.</span>
                  {step.title.split(":")[0]}
                </a>
              ))}
            </div>
          )}
        </section>

        {/* Video Spotlight - featured prominently */}
        {(viewMode === "narrative" || viewMode === "kids") && (
          <VideoSection isKidsMode={viewMode === "kids"} />
        )}

        {/* View Mode: Full Narrative Journey with Artwork Cards */}
        {viewMode === "narrative" && (
          <div className="space-y-12 animate-fade-in-up mt-8">
            {GOSPEL_STEPS.map((step, index) => (
              <React.Fragment key={step.id}>
                <SectionCard step={step} translation={translation} />

                {/* Show the interactive bridge between step 2 (separation) and step 3 (cross) */}
                {index === 1 && (
                  <BridgeIllustration translation={translation} />
                )}
              </React.Fragment>
            ))}

            {/* Prayer & Next Steps */}
            <PrayerSection />

            {/* Explore Deeper Section */}
            <section className="rounded-3xl p-6 sm:p-10 bg-gospel-surface border border-gospel-border shadow-md my-12">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400 block mb-2">
                  Go Deeper in Scripture
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-gospel-text">
                  Explore Biblical Themes
                </h3>
                <p className="text-xs sm:text-base text-gospel-muted mt-2">
                  Discover why we need a savior, the extraordinary signs Jesus performed, and the life-changing stories He told.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 1. The Problem */}
                <Link
                  href="/the-problem"
                  className="rounded-2xl p-5 bg-gospel-surface-raised border border-gospel-border hover:border-rose-500/50 transition-all hover:scale-[1.02] group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30 mb-3">
                      <span>⚠️ The Diagnosis</span>
                    </span>
                    <h4 className="font-display font-bold text-lg text-gospel-text group-hover:text-rose-500 transition-colors">
                      The Problem
                    </h4>
                    <p className="text-xs sm:text-sm text-gospel-muted mt-2 leading-relaxed">
                      Why is the world broken? Why good deeds alone cannot cure our hearts, and why we desperately need a rescuer.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gospel-border flex items-center gap-1 text-xs font-bold text-rose-500">
                    <span>Explore the problem</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {/* 2. Miracles */}
                <Link
                  href="/miracles"
                  className="rounded-2xl p-5 bg-gospel-surface-raised border border-gospel-border hover:border-amber-500/50 transition-all hover:scale-[1.02] group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 mb-3">
                      <span>✨ Signs & Wonders</span>
                    </span>
                    <h4 className="font-display font-bold text-lg text-gospel-text group-hover:text-amber-500 transition-colors">
                      Miracles of Jesus
                    </h4>
                    <p className="text-xs sm:text-sm text-gospel-muted mt-2 leading-relaxed">
                      Calming storms, healing lepers, opening blind eyes, and raising the dead—see His divine power and compassion in action.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gospel-border flex items-center gap-1 text-xs font-bold text-amber-500">
                    <span>Explore miracles</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {/* 3. Parables */}
                <Link
                  href="/parables"
                  className="rounded-2xl p-5 bg-gospel-surface-raised border border-gospel-border hover:border-emerald-500/50 transition-all hover:scale-[1.02] group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 mb-3">
                      <span>🧭 Stories with Meaning</span>
                    </span>
                    <h4 className="font-display font-bold text-lg text-gospel-text group-hover:text-emerald-500 transition-colors">
                      Parables & Meaning
                    </h4>
                    <p className="text-xs sm:text-sm text-gospel-muted mt-2 leading-relaxed">
                      The Prodigal Son, Good Samaritan, Sower, and more. Unpack the hidden heavenly meanings and modern takeaways.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gospel-border flex items-center gap-1 text-xs font-bold text-emerald-500">
                    <span>Explore parables</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </section>
          </div>
        )}

        {/* View Mode: Kids Edition */}
        {viewMode === "kids" && (
          <div className="mt-8">
            <KidsJourney />
          </div>
        )}

        {/* View Mode: Dedicated Bridge Diagram */}
        {viewMode === "bridge" && (
          <div className="animate-fade-in-up space-y-10">
            <BridgeIllustration translation={translation} />
            <PrayerSection />
          </div>
        )}

        {/* View Mode: 1-Page Printable Tract */}
        {viewMode === "tract" && (
          <div className="animate-fade-in-up">
            <PrintableTract translation={translation} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
