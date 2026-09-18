"use client";

import React from "react";
import { GOSPEL_STEPS, SAMPLE_PRAYER } from "@/lib/gospel-data";
import type { Translation } from "./Header";
import { BookOpen, Printer } from "lucide-react";

interface PrintableTractProps {
  translation: Translation;
}

export function PrintableTract({ translation }: PrintableTractProps) {
  return (
    <div className="my-8">
      {/* On-screen control tip */}
      <div className="no-print mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-gospel-text">
            1-Page Summary & Printable Tract View
          </p>
          <p className="text-xs text-gospel-muted">
            Optimized for quick reading and formatted to print cleanly on a single standard sheet of paper.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-2 shadow transition-all shrink-0"
        >
          <Printer className="w-4 h-4" />
          Print / Save PDF
        </button>
      </div>

      {/* The Printable Container */}
      <div className="rounded-3xl bg-gospel-surface border border-gospel-border p-6 sm:p-10 shadow-soft-card print:border-none print:shadow-none print:p-0">
        {/* Tract Header */}
        <div className="border-b-2 border-amber-500/40 pb-4 mb-6 text-center print:text-left print:border-black">
          <div className="flex items-center justify-center print:justify-start gap-2 text-amber-600 dark:text-amber-400 font-display font-extrabold text-xl sm:text-2xl print:text-black">
            <BookOpen className="w-6 h-6" />
            <span>The One Page Gospel</span>
          </div>
          <p className="text-xs sm:text-sm text-gospel-muted print:text-gray-700 mt-1 font-normal">
            The Good News of God&apos;s Love, Hope, and Eternal Life through Jesus Christ ({translation})
          </p>
        </div>

        {/* 5-Point Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {GOSPEL_STEPS.map((step) => (
            <div
              key={step.id}
              className="p-4 rounded-2xl bg-gospel-surface-raised/70 border border-gospel-border-strong/60 flex flex-col justify-between print:border print:border-gray-300 print:bg-white print-break-inside-avoid shadow-sm"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-1">
                  Point {step.number}
                </span>
                <h4 className="font-display font-bold text-sm text-gospel-text print:text-black leading-snug">
                  {step.title}
                </h4>
                <p className="text-[11px] text-gospel-muted print:text-gray-700 mt-1.5 leading-normal">
                  {step.summary}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-gospel-border/50">
                <span className="text-[10px] font-bold text-gospel-text/90 print:text-black block font-mono">
                  {step.keyVerse.reference}
                </span>
                <p className="text-[10px] italic text-gospel-muted print:text-gray-600 line-clamp-3 mt-0.5">
                  &ldquo;{step.keyVerse.translations[translation]}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Response & Prayer */}
        <div className="rounded-2xl p-5 bg-amber-500/10 border border-amber-500/25 print:border print:border-gray-400 print:bg-gray-50 print-break-inside-avoid">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-1">
              <h4 className="font-display font-bold text-base text-gospel-text print:text-black">
                How Will You Respond?
              </h4>
              <p className="text-xs text-gospel-muted print:text-gray-700 mt-1 leading-relaxed">
                Salvation is God&apos;s free gift. If you desire to place your trust in Christ, you can express it in prayer today:
              </p>
            </div>
            <div className="md:col-span-2">
              <blockquote className="text-xs sm:text-sm font-serif italic text-gospel-text print:text-black leading-relaxed border-l-2 border-amber-500 pl-3">
                &ldquo;{SAMPLE_PRAYER.text}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        {/* Tract Footer */}
        <div className="mt-6 pt-4 border-t border-gospel-border/60 text-center text-[11px] text-gospel-muted print:text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Scripture quotations marked {translation}.</span>
          <span className="font-medium">onepagegospel.org — Freely shared for encouragement and truth.</span>
        </div>
      </div>
    </div>
  );
}
