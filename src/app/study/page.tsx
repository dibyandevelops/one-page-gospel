"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  STUDY_SECTIONS,
  BIBLICAL_LEXICON,
} from "@/lib/study-data";
import {
  ArrowLeft,
  Search,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Printer,
  Moon,
  Sun,
  Share2,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function StudyPage() {
  const { resolvedTheme, setTheme } = useTheme();
  const [activeSectionId, setActiveSectionId] = useState<string>("divine-origin");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({});

  // Scroll tracking for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of STUDY_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSectionId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const toggleFaq = (key: string) => {
    setOpenFaqs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter sections if search is entered
  const filteredSections = searchQuery.trim()
    ? STUDY_SECTIONS.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.detailedExposition.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : STUDY_SECTIONS;

  const filteredLexicon = searchQuery.trim()
    ? BIBLICAL_LEXICON.filter(
        (l) =>
          l.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.transliteration.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : BIBLICAL_LEXICON;

  return (
    <div className="min-h-screen bg-gospel-canvas text-gospel-text">
      {/* Minimal Top Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-gospel-canvas/90 border-b border-gospel-border no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gospel-muted hover:text-amber-500 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Visual Journey</span>
            </Link>
            <span className="text-gospel-border">|</span>
            <span className="font-serif font-bold text-sm tracking-tight hidden sm:inline text-gospel-text">
              Theological Study Guide
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative hidden md:block w-52">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-gospel-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search doctrines..."
                className="w-full pl-8 pr-3 py-1 rounded-lg text-xs bg-gospel-surface border border-gospel-border focus:border-amber-500 focus:outline-none text-gospel-text placeholder:text-gospel-muted"
              />
            </div>

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              title="Print Study Document"
              className="p-1.5 rounded-lg bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              title="Toggle theme"
              className="p-1.5 rounded-lg bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-gospel-text transition-colors"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex gap-12">
        {/* Left Sticky Table of Contents (Desktop Sidebar) */}
        <aside className="w-64 shrink-0 hidden lg:block no-print">
          <div className="sticky top-20">
            <div className="pb-3 mb-4 border-b border-gospel-border">
              <span className="text-[11px] font-mono uppercase tracking-widest text-gospel-muted font-bold">
                Table of Contents
              </span>
            </div>
            <nav className="space-y-1">
              {STUDY_SECTIONS.map((section) => {
                const isActive = activeSectionId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? "bg-amber-500/15 text-amber-500 font-bold border-l-2 border-amber-500 pl-2.5"
                        : "text-gospel-muted hover:text-gospel-text hover:bg-gospel-surface"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-gospel-muted mr-1.5">
                      {section.number}.
                    </span>
                    {section.title}
                  </a>
                );
              })}
            </nav>

            <div className="mt-8 pt-6 border-t border-gospel-border">
              <div className="p-3.5 rounded-xl bg-gospel-surface border border-gospel-border text-xs text-gospel-muted">
                <span className="font-bold text-gospel-text block mb-1">
                  💡 Reader&apos;s Note
                </span>
                This document is designed for thorough study, apologetic reference, and theological clarity.
              </div>
            </div>
          </div>
        </aside>

        {/* Main Article Stream (Clean, Editorial, Distraction-Free Typography) */}
        <main className="flex-1 max-w-3xl mx-auto">
          {/* Document Header */}
          <section className="mb-14 pb-8 border-b border-gospel-border">
            <div className="flex items-center gap-2 text-xs font-mono text-gospel-muted uppercase tracking-widest mb-3">
              <span>Theology &amp; Doctrine</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-amber-500 font-bold">
                <Clock className="w-3 h-3" /> 15 Min In-Depth Read
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-gospel-text leading-tight mb-4">
              The Architecture of the Gospel
            </h1>

            <p className="text-lg sm:text-xl text-gospel-muted font-serif italic leading-relaxed">
              A comprehensive exposition of biblical soteriology, historical evidence, linguistic nuances, and theological foundations.
            </p>
          </section>

          {/* Study Sections Stream */}
          <div className="space-y-16">
            {filteredSections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-20">
                {/* Section Header */}
                <div className="mb-6">
                  <span className="text-xs font-mono font-bold text-amber-500 tracking-wider uppercase block mb-1">
                    Section {section.number}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gospel-text tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-gospel-muted mt-1">
                    {section.subtitle}
                  </p>
                </div>

                {/* Section Summary Callout */}
                <div className="p-5 rounded-xl bg-gospel-surface border-l-4 border-amber-500 my-6 text-sm sm:text-base text-gospel-text/90 leading-relaxed font-serif">
                  {section.summary}
                </div>

                {/* Scripture Passages Box */}
                {section.scripturePassages.length > 0 && (
                  <div className="my-8 space-y-4">
                    {section.scripturePassages.map((sp, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl p-5 bg-gospel-surface-raised border border-gospel-border"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono font-bold text-amber-500">
                            {sp.reference}
                          </span>
                          <button
                            onClick={() => handleCopy(`${sp.reference}: "${sp.text}"`, `${section.id}-${idx}`)}
                            className="p-1 rounded text-gospel-muted hover:text-gospel-text text-xs flex items-center gap-1 transition-colors"
                            title="Copy scripture citation"
                          >
                            {copiedText === `${section.id}-${idx}` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                        <blockquote className="font-serif text-base sm:text-lg italic text-gospel-text mb-3">
                          &ldquo;{sp.text}&rdquo;
                        </blockquote>
                        <p className="text-xs text-gospel-muted border-t border-gospel-border pt-2.5">
                          <strong className="text-gospel-text/80">Theological Context:</strong> {sp.theologicalNote}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Detailed Exposition Paragraphs */}
                <div className="space-y-4 text-base text-gospel-text/90 leading-relaxed font-normal">
                  {section.detailedExposition.map((para, pIdx) => (
                    <p key={pIdx} className="leading-7">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Historical Context Note if present */}
                {section.historicalContext && (
                  <div className="my-6 p-4 rounded-xl bg-sky-500/5 border border-sky-500/20 text-xs sm:text-sm text-gospel-text/85">
                    <strong className="text-sky-400 block mb-1">📜 Historical &amp; Cultural Backdrop:</strong>
                    {section.historicalContext}
                  </div>
                )}

                {/* Theological Terms Tags */}
                {section.keyTheologicalTerms && (
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-gospel-muted">Key Concepts:</span>
                    {section.keyTheologicalTerms.map((term, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-gospel-surface border border-gospel-border text-gospel-muted"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                )}

                {/* FAQs Section within this category */}
                {section.faqs && section.faqs.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gospel-border/80">
                    <h3 className="font-serif text-lg font-bold text-gospel-text mb-4">
                      Frequently Addressed Questions
                    </h3>
                    <div className="space-y-3">
                      {section.faqs.map((faq, fIdx) => {
                        const faqKey = `${section.id}-faq-${fIdx}`;
                        const isOpen = openFaqs[faqKey] ?? true;
                        return (
                          <div
                            key={fIdx}
                            className="rounded-xl border border-gospel-border bg-gospel-surface overflow-hidden"
                          >
                            <button
                              onClick={() => toggleFaq(faqKey)}
                              className="w-full text-left p-4 flex items-center justify-between gap-4 font-semibold text-sm text-gospel-text hover:bg-gospel-surface-raised transition-colors"
                            >
                              <span>{faq.question}</span>
                              {isOpen ? (
                                <ChevronUp className="w-4 h-4 text-gospel-muted shrink-0" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-gospel-muted shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="p-4 pt-0 text-sm text-gospel-muted leading-relaxed border-t border-gospel-border/50 bg-gospel-surface/50">
                                <p className="mt-2">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* If this is the Lexicon section, render the vocabulary grid */}
                {section.id === "biblical-lexicon" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {filteredLexicon.map((entry, lIdx) => (
                      <div
                        key={lIdx}
                        className="rounded-xl p-4 bg-gospel-surface border border-gospel-border hover:border-amber-500/40 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-serif font-bold text-base text-gospel-text">
                            {entry.term}
                          </span>
                          <span className="font-serif text-lg text-amber-500 font-normal">
                            {entry.original}
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-gospel-muted mb-2">
                          <span>{entry.language}</span> • <span>/{entry.transliteration}/</span>
                        </div>
                        <p className="text-xs text-gospel-text/80 leading-relaxed mb-3">
                          {entry.definition}
                        </p>
                        <span className="text-[10px] font-mono text-amber-500 block">
                          Ref: {entry.scriptureReference}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Bottom Navigation & CTA */}
          <div className="mt-20 pt-10 border-t border-gospel-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Interactive One Page Gospel</span>
            </Link>

            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  setCopiedText("share-page");
                  setTimeout(() => setCopiedText(null), 2000);
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gospel-surface border border-gospel-border text-xs font-semibold text-gospel-muted hover:text-gospel-text transition-colors"
            >
              {copiedText === "share-page" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Study Guide</span>
                </>
              )}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
