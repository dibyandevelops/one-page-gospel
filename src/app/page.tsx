"use client";

import React, { useState } from "react";
import { Header, type ViewMode, type Translation } from "@/components/gospel/Header";
import { SectionCard } from "@/components/gospel/SectionCard";
import { BridgeIllustration } from "@/components/gospel/BridgeIllustration";
import { PrayerSection } from "@/components/gospel/PrayerSection";
import { PrintableTract } from "@/components/gospel/PrintableTract";
import { VideoSection } from "@/components/gospel/VideoSection";
import { KidsJourney } from "@/components/gospel/KidsJourney";
import { Footer } from "@/components/gospel/Footer";
import { GOSPEL_STEPS } from "@/lib/gospel-data";
import { Sparkles, BookMarked, ShieldCheck, Heart } from "lucide-react";

export default function HomePage() {
  const [viewMode, setViewMode] = useState<ViewMode>("narrative");
  const [translation, setTranslation] = useState<Translation>("ESV");

  return (
    <div className="min-h-screen flex flex-col bg-gospel-canvas text-gospel-text">
      {/* Sticky Header */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        translation={translation}
        setTranslation={setTranslation}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 w-full pt-6 sm:pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center pt-6 pb-8 max-w-3xl mx-auto no-print">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-5 animate-fade-in-up">
            <Sparkles className="w-3.5 h-3.5" />
            {viewMode === "kids" ? "🌟 Kids & Youth Edition" : "Clear • Faithful • Life-Transforming"}
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-gospel-text leading-tight mb-4 animate-fade-in-up">
            {viewMode === "kids" ? "The Big Story: God's Love for Kids!" : "The Gospel in One Page"}
          </h1>

          <p className="text-base sm:text-xl text-gospel-muted leading-relaxed font-serif max-w-2xl mx-auto mb-6 animate-fade-in-up">
            {viewMode === "kids"
              ? "An exciting, easy-to-understand journey through God's awesome plan to love, forgive, and adopt you into His forever family."
              : "The greatest news in human history: how a loving God rescues, redeems, and reconciles us to Himself through Jesus Christ."}
          </p>

          {/* Mode Switch Helper Pill */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {viewMode !== "kids" ? (
              <button
                onClick={() => setViewMode("kids")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-amber-500/15 border border-amber-500/40 text-xs font-bold text-amber-500 hover:scale-105 transition-all shadow-sm"
              >
                <span>🌟 Switch to Kid-Friendly Edition</span>
              </button>
            ) : (
              <button
                onClick={() => setViewMode("narrative")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-gospel-text transition-all"
              >
                <span>← Back to Standard Journey</span>
              </button>
            )}
          </div>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium text-gospel-muted">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gospel-surface border border-gospel-border">
              <BookMarked className="w-3.5 h-3.5 text-amber-500" />
              5 Core Truths
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gospel-surface border border-gospel-border">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Direct Scripture Quotes ({translation})
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gospel-surface border border-gospel-border">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              All Ages &amp; Families
            </span>
          </div>
        </section>

        {/* Video Spotlight - featured in both Guided Journey and Kids Edition */}
        {(viewMode === "narrative" || viewMode === "kids") && (
          <VideoSection isKidsMode={viewMode === "kids"} />
        )}

        {/* View Mode: Full Narrative Journey */}
        {viewMode === "narrative" && (
          <div className="space-y-8 animate-fade-in-up mt-8">
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
          <div className="animate-fade-in-up space-y-8">
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
