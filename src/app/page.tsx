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
import { BookMarked, ShieldCheck, Heart, ArrowRight, MapPin } from "lucide-react";

export default function HomePage() {
  const [viewMode, setViewMode] = useState<ViewMode>("narrative");
  const [translation, setTranslation] = useState<Translation>("ESV");

  const heroContent = {
    narrative: {
      badgeDot: "bg-amber-500",
      badgeTag: "The Gospel Journey",
      badgeSubtag: "From Creation to New Life",
      title: (
        <>
          The Good News <span className="text-shimmer-gold">in Plain Words</span>
        </>
      ),
      description:
        "Follow the five foundational movements of God's story: how we were made in love, why the world is broken, and how Jesus restores us to life and hope.",
    },
    bridge: {
      badgeDot: "bg-amber-400",
      badgeTag: "Visual Illustration",
      badgeSubtag: "God's Ultimate Answer",
      title: (
        <>
          The Solution: <span className="text-shimmer-gold">Jesus Bridges the Gap</span>
        </>
      ),
      description:
        "Explore how the cross and resurrection of Jesus bridge the impossible chasm of sin, reconciling broken humanity to a holy God.",
    },
    tract: {
      badgeDot: "bg-sky-500",
      badgeTag: "1-Page Printable Tract",
      badgeSubtag: "Concise & Shareable",
      title: (
        <>
          The Gospel <span className="text-shimmer-gold">at a Glance</span>
        </>
      ),
      description:
        "A clear, four-movement overview designed for fast reading, physical printing on A4/Letter, and personal reflection.",
    },
    kids: {
      badgeDot: "bg-amber-400",
      badgeTag: "Kids & Family Adventure",
      badgeSubtag: "Storybook Edition",
      title: (
        <>
          God&apos;s Big Story <span className="text-shimmer-gold">For You!</span>
        </>
      ),
      description:
        "An exciting visual story discovering how God made you, loves you, and invites you into His forever family.",
    },
  }[viewMode];

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
      <main className="flex-1 max-w-5xl mx-auto px-3 sm:px-6 w-full pt-4 sm:pt-10 pb-16 sm:pb-20 relative z-10">
        {/* Ambient Glow Backdrop behind Hero */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[380px] bg-gradient-to-b from-amber-500/15 via-sky-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="text-center pt-3 sm:pt-8 pb-8 sm:pb-10 max-w-3xl mx-auto no-print relative">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface/80 backdrop-blur-md border border-border shadow-sm text-[11px] sm:text-xs font-semibold tracking-wide mb-5 sm:mb-6 animate-fade-in-up">
            <span className={`w-2 h-2 rounded-full ${heroContent.badgeDot} animate-pulse shrink-0`} />
            <span className="text-amber-600 dark:text-amber-400 font-bold">
              {heroContent.badgeTag}
            </span>
            <span className="text-gospel-border">•</span>
            <span className="text-gospel-muted">
              {heroContent.badgeSubtag}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6 animate-fade-in-up text-slate-900 dark:text-white">
            {heroContent.title}
          </h1>

          <p className="text-sm sm:text-xl text-gospel-muted leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up font-normal">
            {heroContent.description}
          </p>

          {/* Mode Switch Helper Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {viewMode === "narrative" && (
              <>
                <button
                  onClick={() => setViewMode("bridge")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-xs shadow-glow-gold hover:bg-amber-400 transition-all"
                >
                  <span>✨ The Solution (Visual)</span>
                </button>
                <Link
                  href="/the-problem"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-xs font-bold text-rose-700 dark:text-rose-300 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                >
                  <span>⚠️ The Problem</span>
                </Link>
                <button
                  onClick={() => setViewMode("tract")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-gospel-text hover:border-amber-500/40 transition-all shadow-sm"
                >
                  <span>📄 1-Page Summary</span>
                </button>
                <button
                  onClick={() => setViewMode("kids")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-amber-500/15 border border-amber-500/40 text-xs font-bold text-amber-800 dark:text-amber-300 hover:border-amber-500 transition-all shadow-sm"
                >
                  <span>🌟 Kids Edition</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}

            {viewMode === "bridge" && (
              <>
                <button
                  onClick={() => setViewMode("narrative")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-xs shadow-glow-gold hover:bg-amber-400 transition-all"
                >
                  <span>← Full Journey</span>
                </button>
                <Link
                  href="/the-problem"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-xs font-bold text-rose-700 dark:text-rose-300 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                >
                  <span>⚠️ Understand The Problem</span>
                </Link>
                <a
                  href="#prayer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-text hover:border-amber-500/50 transition-all"
                >
                  <span>Accept Jesus in Prayer</span>
                </a>
              </>
            )}

            {viewMode === "tract" && (
              <>
                <button
                  onClick={() => setViewMode("narrative")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-xs shadow-glow-gold hover:bg-amber-400 transition-all"
                >
                  <span>← Back to Full Journey</span>
                </button>
                <button
                  onClick={() => setViewMode("bridge")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all"
                >
                  <span>✨ The Solution</span>
                </button>
              </>
            )}

            {viewMode === "kids" && (
              <>
                <button
                  onClick={() => setViewMode("narrative")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-gospel-text hover:border-amber-500/40 transition-all shadow-sm"
                >
                  <span>← Back to Main Journey</span>
                </button>
                <button
                  onClick={() => setViewMode("bridge")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-xs shadow-glow-gold hover:bg-amber-400 transition-all"
                >
                  <span>✨ Explore The Solution</span>
                </button>
              </>
            )}
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
            <section className="rounded-3xl p-4 sm:p-10 bg-gospel-surface border border-gospel-border shadow-md my-8 sm:my-12">
              <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
                <span className="text-xs uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400 block mb-2">
                  Go Deeper in Scripture
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-gospel-text">
                  Explore Biblical Themes
                </h3>
                <p className="text-xs sm:text-base text-gospel-muted mt-2">
                  Discover why we need a savior, the extraordinary signs Jesus performed, the parables He taught, and find healthy churches nearby.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {/* 1. The Problem */}
                <Link
                  href="/the-problem"
                  className="rounded-2xl p-4 sm:p-5 bg-gospel-surface-raised border border-gospel-border hover:border-rose-500/50 transition-all hover:scale-[1.02] group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30 mb-3">
                      <span>⚠️ The Diagnosis</span>
                    </span>
                    <h4 className="font-display font-bold text-base sm:text-lg text-gospel-text group-hover:text-rose-500 transition-colors">
                      The Problem
                    </h4>
                    <p className="text-xs text-gospel-muted mt-2 leading-relaxed">
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
                  className="rounded-2xl p-4 sm:p-5 bg-gospel-surface-raised border border-gospel-border hover:border-amber-500/50 transition-all hover:scale-[1.02] group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 mb-3">
                      <span>✨ Signs & Wonders</span>
                    </span>
                    <h4 className="font-display font-bold text-base sm:text-lg text-gospel-text group-hover:text-amber-500 transition-colors">
                      Miracles of Jesus
                    </h4>
                    <p className="text-xs text-gospel-muted mt-2 leading-relaxed">
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
                  className="rounded-2xl p-4 sm:p-5 bg-gospel-surface-raised border border-gospel-border hover:border-emerald-500/50 transition-all hover:scale-[1.02] group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 mb-3">
                      <span>🧭 Stories with Meaning</span>
                    </span>
                    <h4 className="font-display font-bold text-base sm:text-lg text-gospel-text group-hover:text-emerald-500 transition-colors">
                      Parables &amp; Meaning
                    </h4>
                    <p className="text-xs text-gospel-muted mt-2 leading-relaxed">
                      The Prodigal Son, Good Samaritan, Sower, and more. Unpack the hidden heavenly meanings and modern takeaways.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gospel-border flex items-center gap-1 text-xs font-bold text-emerald-500">
                    <span>Explore parables</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {/* 4. Churches Nearby */}
                <Link
                  href="/churches"
                  className="rounded-2xl p-4 sm:p-5 bg-gospel-surface-raised border border-gospel-border hover:border-sky-500/50 transition-all hover:scale-[1.02] group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-sky-500" />
                      <span>Fellowship</span>
                    </span>
                    <h4 className="font-display font-bold text-base sm:text-lg text-gospel-text group-hover:text-sky-500 transition-colors">
                      Churches Nearby
                    </h4>
                    <p className="text-xs text-gospel-muted mt-2 leading-relaxed">
                      Find biblically sound local churches, verified global locators, and 5 key marks of a healthy gospel church.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gospel-border flex items-center gap-1 text-xs font-bold text-sky-500">
                    <span>Find a church</span>
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
