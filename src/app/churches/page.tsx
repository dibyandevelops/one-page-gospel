"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  CHURCH_DIRECTORIES,
  SAMPLE_CHURCHES,
  HEALTHY_CHURCH_MARKS,
  ChurchDirectory,
  ChurchEntry,
} from "@/lib/churches-data";
import {
  MapPin,
  Search,
  ExternalLink,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Share2,
  Check,
  Moon,
  Sun,
  BookOpen,
  Sparkles,
  AlertTriangle,
  Heart,
  Navigation,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function ChurchesPage() {
  const { resolvedTheme, setTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTradition, setSelectedTradition] = useState<string>("All");
  const [expandedMarkIndex, setExpandedMarkIndex] = useState<number | null>(0);

  const traditions = [
    "All",
    "Non-denominational",
    "Baptist",
    "Presbyterian",
    "Anglican",
    "Reformed",
    "Evangelical Free",
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Find a Gospel-Centered Church Nearby - One Page Gospel",
          text: "Discover biblically sound, gospel-grounded local churches and directories worldwide.",
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

  const filteredChurches = useMemo(() => {
    return SAMPLE_CHURCHES.filter((church) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        church.name.toLowerCase().includes(query) ||
        church.city.toLowerCase().includes(query) ||
        church.region.toLowerCase().includes(query) ||
        church.country.toLowerCase().includes(query) ||
        church.tradition.toLowerCase().includes(query);

      const matchesTradition =
        selectedTradition === "All" || church.tradition === selectedTradition;

      return matchesQuery && matchesTradition;
    });
  }, [searchQuery, selectedTradition]);

  return (
    <div className="min-h-screen flex flex-col bg-gospel-canvas text-gospel-text selection:bg-amber-500/20 selection:text-amber-500">
      {/* Sticky Subpage Header */}
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
                <MapPin className="w-3.5 h-3.5" />
                Churches Nearby
              </span>
              <span>•</span>
              <span>Find a Spiritual Home</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/the-problem"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 transition-colors"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>The Problem</span>
            </Link>
            <Link
              href="/#solution"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-xs font-bold text-amber-700 dark:text-amber-300 hover:bg-amber-500 hover:text-slate-950 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Solution</span>
            </Link>
            <Link
              href="/study"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border text-xs font-bold text-gospel-muted hover:text-amber-500 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Study</span>
            </Link>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text transition-colors"
              title="Share church locator"
              aria-label="Share this page"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            {/* Theme toggle */}
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 rounded-xl bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full space-y-16">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-600 dark:text-amber-400 shadow-sm">
            <MapPin className="w-3.5 h-3.5 animate-bounce" />
            <span>Finding a Gospel Community</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gospel-text leading-tight">
            Find a Gospel-Centered{" "}
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Church Nearby
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gospel-muted leading-relaxed">
            Following Jesus was never designed to be done alone. Whether you
            are searching for your very first church or relocating, connect with
            a grace-filled, Bible-grounded community where you are known, loved,
            and equipped.
          </p>

          {/* Quick Actions */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <a
              href="https://www.google.com/maps/search/christian+churches+near+me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/25 hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4 shrink-0" />
              <span>Search Churches Near Me on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
            </a>

            <a
              href="#healthy-marks"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-gospel-surface border border-gospel-border text-xs sm:text-sm font-bold text-gospel-text hover:border-amber-500/50 hover:bg-gospel-surface-raised transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>What Makes a Church Healthy?</span>
            </a>
          </div>
        </section>

        {/* Global Trusted Church Directories */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gospel-border pb-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 dark:text-amber-400">
                Vetted Global Networks
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gospel-text tracking-tight mt-1">
                Verified Church Locators
              </h2>
            </div>
            <p className="text-xs text-gospel-muted sm:text-right max-w-sm">
              Use these curated directories to find faithful, expository, and
              gospel-proclaiming churches worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CHURCH_DIRECTORIES.map((dir: ChurchDirectory) => (
              <a
                key={dir.name}
                href={dir.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-5 rounded-2xl bg-gospel-surface border border-gospel-border hover:border-amber-500/50 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-gospel-surface-raised border border-gospel-border text-gospel-muted">
                      {dir.scope}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gospel-muted group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <h3 className="font-bold text-base text-gospel-text group-hover:text-amber-500 transition-colors">
                    {dir.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2.5">
                    {dir.tagline}
                  </p>
                  <p className="text-xs text-gospel-muted leading-relaxed">
                    {dir.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gospel-border flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 group-hover:underline">
                  <span>Search Directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Interactive Directory Search & Sample Churches */}
        <section className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gospel-border pb-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 dark:text-amber-400">
                Directory Spotlight
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gospel-text tracking-tight mt-1">
                Explore Sample Congregations
              </h2>
            </div>
            <p className="text-xs text-gospel-muted sm:text-right max-w-sm">
              Search sample partner churches across major cities and traditions.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="p-4 rounded-2xl bg-gospel-surface border border-gospel-border space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gospel-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city (e.g. New York, London, Singapore) or church name..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gospel-canvas border border-gospel-border text-base sm:text-sm text-gospel-text placeholder:text-gospel-muted focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Tradition Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
              <span className="text-gospel-muted font-bold whitespace-nowrap pl-1 pr-2">
                Tradition:
              </span>
              {traditions.map((tradition) => (
                <button
                  key={tradition}
                  onClick={() => setSelectedTradition(tradition)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all min-h-[32px] ${
                    selectedTradition === tradition
                      ? "bg-amber-500 text-slate-950 font-bold shadow-sm"
                      : "bg-gospel-canvas border border-gospel-border text-gospel-muted hover:text-gospel-text"
                  }`}
                >
                  {tradition}
                </button>
              ))}
            </div>
          </div>

          {/* Churches Cards */}
          {filteredChurches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredChurches.map((church: ChurchEntry) => (
                <div
                  key={church.id}
                  className="p-5 rounded-2xl bg-gospel-surface border border-gospel-border hover:border-amber-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-base text-gospel-text">
                          {church.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-gospel-muted mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>
                            {church.city}, {church.region} • {church.country}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 shrink-0">
                        {church.tradition}
                      </span>
                    </div>

                    <p className="text-xs text-gospel-muted italic bg-gospel-canvas/60 p-2.5 rounded-xl border border-gospel-border/50">
                      &ldquo;{church.highlight}&rdquo;
                    </p>

                    <p className="text-xs text-gospel-muted">
                      <span className="font-semibold text-gospel-text">
                        Address:{" "}
                      </span>
                      {church.address}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gospel-border flex items-center justify-between">
                    <a
                      href={church.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      <span>Visit Church Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        `${church.name} ${church.address}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-gospel-muted hover:text-gospel-text transition-colors"
                    >
                      <span>View on Map</span>
                      <Navigation className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 rounded-2xl bg-gospel-surface border border-gospel-border space-y-3">
              <Building className="w-8 h-8 text-gospel-muted mx-auto" />
              <h3 className="font-bold text-sm text-gospel-text">
                No matching churches found
              </h3>
              <p className="text-xs text-gospel-muted max-w-sm mx-auto">
                Try a different search keyword or browse the official church
                directories above to locate congregations in your specific area.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTradition("All");
                }}
                className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-colors"
              >
                Clear Search Filters
              </button>
            </div>
          )}
        </section>

        {/* 5 Biblical Marks of a Healthy Church */}
        <section id="healthy-marks" className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gospel-border pb-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600 dark:text-emerald-400">
                Biblical Discernment
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gospel-text tracking-tight mt-1">
                5 Marks of a Healthy Church
              </h2>
            </div>
            <p className="text-xs text-gospel-muted sm:text-right max-w-sm">
              Not every building with a steeple is healthy. Look for these
              five foundational marks of spiritual vitality.
            </p>
          </div>

          <div className="space-y-3">
            {HEALTHY_CHURCH_MARKS.map((mark, index) => {
              const isExpanded = expandedMarkIndex === index;
              return (
                <div
                  key={mark.title}
                  className={`rounded-2xl border transition-all ${
                    isExpanded
                      ? "bg-gospel-surface border-amber-500/40 shadow-md"
                      : "bg-gospel-surface/60 border-gospel-border hover:border-gospel-border-strong"
                  }`}
                >
                  <button
                    onClick={() =>
                      setExpandedMarkIndex(isExpanded ? null : index)
                    }
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          isExpanded
                            ? "bg-amber-500 text-slate-950"
                            : "bg-gospel-canvas border border-gospel-border text-gospel-muted"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-gospel-text">
                          {mark.title}
                        </h3>
                        <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                          {mark.scripture}
                        </span>
                      </div>
                    </div>

                    <div className="p-1 rounded-lg text-gospel-muted hover:text-gospel-text shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 border-t border-gospel-border/50 space-y-3 animate-fade-in text-xs sm:text-sm">
                      <p className="text-gospel-text leading-relaxed">
                        {mark.explanation}
                      </p>
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                        <span className="font-bold text-amber-700 dark:text-amber-300 block mb-1">
                          Why It Matters for You:
                        </span>
                        <p className="text-gospel-muted leading-relaxed">
                          {mark.whyItMatters}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* First-Time Visitor Guide */}
        <section className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-gospel-surface to-gospel-surface-raised border border-gospel-border shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <HelpCircle className="w-4 h-4" />
            <span>First-Time Visitor Advice</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gospel-text">
            Visiting for the First Time? Questions to Keep in Mind
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-gospel-canvas border border-gospel-border space-y-1">
              <span className="font-bold text-gospel-text block">
                1. What is the sermon about?
              </span>
              <p className="text-xs text-gospel-muted leading-relaxed">
                Does the preacher explain the Bible and make Jesus the focal
                point, or is it mostly self-help, politics, or entertainment?
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-gospel-canvas border border-gospel-border space-y-1">
              <span className="font-bold text-gospel-text block">
                2. Are visitors welcomed warmly?
              </span>
              <p className="text-xs text-gospel-muted leading-relaxed">
                Do people greet you, introduce themselves, and offer hospitality
                without being pushy or judgmental?
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-gospel-canvas border border-gospel-border space-y-1">
              <span className="font-bold text-gospel-text block">
                3. Is grace emphasized over performance?
              </span>
              <p className="text-xs text-gospel-muted leading-relaxed">
                Do people speak freely of their need for Jesus, or is there an
                unspoken pressure to look perfect and disguise struggles?
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-gospel-canvas border border-gospel-border space-y-1">
              <span className="font-bold text-gospel-text block">
                4. Does the church serve its neighbors?
              </span>
              <p className="text-xs text-gospel-muted leading-relaxed">
                Does the congregation care for the poor, reach out to the broken,
                and show tangible Christ-like love in its surrounding community?
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Banner linking back to The Problem & The Solution */}
        <section className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-amber-500/15 via-gospel-surface to-gospel-surface-raised border border-amber-500/30 text-center space-y-5">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-600 dark:text-amber-400">
            Revisit the Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gospel-text">
            Ready to Take Your Next Step with Jesus?
          </h2>
          <p className="text-xs sm:text-sm text-gospel-muted max-w-xl mx-auto leading-relaxed">
            The local church is a body of forgiven sinners redeemed by Jesus
            Christ. Revisit the core truth of why we need a Savior and how His
            cross reconciles us to God forever.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/the-problem"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gospel-surface border border-rose-500/30 text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-all shadow-sm"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Understand The Problem</span>
            </Link>

            <Link
              href="/#solution"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 text-xs sm:text-sm font-extrabold shadow-lg shadow-amber-500/25 hover:bg-amber-400 hover:scale-105 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore The Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/#prayer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gospel-surface border border-gospel-border text-xs sm:text-sm font-bold text-gospel-text hover:border-amber-500/50 transition-all"
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
            <Link
              href="/"
              className="font-bold text-gospel-text hover:text-amber-500 transition-colors"
            >
              One Page Gospel
            </Link>
            <span>•</span>
            <span>Churches Nearby</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/the-problem"
              className="hover:text-amber-500 transition-colors"
            >
              The Problem
            </Link>
            <Link
              href="/#solution"
              className="hover:text-amber-500 transition-colors"
            >
              The Solution
            </Link>
            <Link
              href="/miracles"
              className="hover:text-amber-500 transition-colors"
            >
              Miracles
            </Link>
            <Link
              href="/parables"
              className="hover:text-amber-500 transition-colors"
            >
              Parables
            </Link>
            <Link
              href="/study"
              className="hover:text-amber-500 transition-colors"
            >
              Study Guide
            </Link>
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
