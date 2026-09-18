"use client";

import React, { useState } from "react";
import { GOSPEL_STEPS, SAMPLE_PRAYER } from "@/lib/gospel-data";
import type { Translation } from "./Header";
import { BookOpen, Printer, Check, Copy } from "lucide-react";

interface PrintableTractProps {
  translation: Translation;
}

export function PrintableTract({ translation }: PrintableTractProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyPrayer = async () => {
    await navigator.clipboard.writeText(SAMPLE_PRAYER.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8">
      {/* On-Screen Control Banner */}
      <div className="no-print mb-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <p className="text-sm font-bold text-gospel-text">
              Printable 1-Page Tract &amp; Study Handout
            </p>
          </div>
          <p className="text-xs text-gospel-muted mt-1 max-w-xl">
            Optimized for printing on standard Letter or A4 paper. Headers, buttons, and dark mode backgrounds are automatically hidden for crisp black-and-white or color printing.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyPrayer}
            className="px-3.5 py-2 rounded-xl bg-gospel-surface border border-gospel-border text-xs font-semibold hover:border-amber-500/40 text-gospel-text transition-all flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-gospel-muted" />}
            <span>{copied ? "Prayer Copied" : "Copy Prayer"}</span>
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-md transition-all shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>Print Tract</span>
          </button>
        </div>
      </div>

      {/* The Printable Sheet Container */}
      <div className="rounded-3xl bg-gospel-surface border border-gospel-border p-6 sm:p-10 shadow-xl print:border-none print:shadow-none print:p-0 print:m-0 print:bg-white text-slate-900 dark:text-white print:text-black">
        {/* Tract Header */}
        <div className="border-b-2 border-amber-500/40 print:border-b-2 print:border-black pb-4 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 print:text-black font-display font-extrabold text-2xl print:text-2xl">
              <BookOpen className="w-6 h-6 print:text-black" />
              <span>The One Page Gospel</span>
            </div>
            <p className="text-xs sm:text-sm text-gospel-muted print:text-gray-700 mt-1 font-medium">
              The Good News in Plain Words: From Separation to Eternal Life ({translation})
            </p>
          </div>
          <div className="text-left sm:text-right text-[11px] text-gospel-muted print:text-gray-600 font-mono">
            <span>one-page-gospel.vercel.app</span>
          </div>
        </div>

        {/* 4 Core Movements: Clear 2x2 Grid for High Readability on Paper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 print:gap-3">
          {/* Movement 1: God's Good Purpose */}
          <div className="p-4 rounded-2xl bg-gospel-surface-raised border border-gospel-border print:border print:border-gray-300 print:bg-white print-break-inside-avoid flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 print:text-black uppercase tracking-wider">
                  1. Divine Origin
                </span>
                <span className="text-[10px] font-mono font-bold text-gospel-muted print:text-gray-600">
                  {GOSPEL_STEPS[0].keyVerse.reference}
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-gospel-text print:text-black mb-1">
                God&apos;s Design: Made for Relationship
              </h4>
              <p className="text-xs text-gospel-muted print:text-gray-800 leading-relaxed mb-3">
                You were not an accident. God created you out of infinite love to live in close relationship with Him and reflect His goodness in the world.
              </p>
            </div>
            <div className="pt-2 border-t border-gospel-border print:border-gray-200">
              <p className="text-[11px] italic text-gospel-text print:text-gray-700">
                &ldquo;{GOSPEL_STEPS[0].keyVerse.translations[translation]}&rdquo;
              </p>
            </div>
          </div>

          {/* Movement 2: The Problem (The Fall & Separation) */}
          <div className="p-4 rounded-2xl bg-rose-500/5 dark:bg-rose-950/20 border border-rose-500/30 print:border print:border-gray-300 print:bg-white print-break-inside-avoid flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold text-rose-600 dark:text-rose-400 print:text-black uppercase tracking-wider">
                  2. The Problem
                </span>
                <span className="text-[10px] font-mono font-bold text-gospel-muted print:text-gray-600">
                  {GOSPEL_STEPS[1].keyVerse.reference}
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-rose-600 dark:text-rose-400 print:text-black mb-1">
                The Separation: Broken by Sin
              </h4>
              <p className="text-xs text-gospel-muted print:text-gray-800 leading-relaxed mb-3">
                We chose our own way over God&apos;s love. Sin created an impassable canyon between us and a holy God. Good deeds and moral efforts cannot bridge this gap.
              </p>
            </div>
            <div className="pt-2 border-t border-rose-500/20 print:border-gray-200">
              <p className="text-[11px] italic text-gospel-text print:text-gray-700">
                &ldquo;{GOSPEL_STEPS[1].keyVerse.translations[translation]}&rdquo;
              </p>
            </div>
          </div>

          {/* Movement 3: The Solution (The Cross & Resurrection) */}
          <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-950/20 border border-amber-500/40 print:border print:border-gray-300 print:bg-white print-break-inside-avoid flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 print:text-black uppercase tracking-wider">
                  3. The Solution
                </span>
                <span className="text-[10px] font-mono font-bold text-gospel-muted print:text-gray-600">
                  {GOSPEL_STEPS[2].keyVerse.reference}
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-amber-600 dark:text-amber-400 print:text-black mb-1">
                Jesus Bridges the Chasm
              </h4>
              <p className="text-xs text-gospel-muted print:text-gray-800 leading-relaxed mb-3">
                God did not leave us to perish. Jesus Christ took our penalty on the cross and rose from the dead, providing the only complete solution to our separation.
              </p>
            </div>
            <div className="pt-2 border-t border-amber-500/20 print:border-gray-200">
              <p className="text-[11px] italic text-gospel-text print:text-gray-700">
                &ldquo;{GOSPEL_STEPS[2].keyVerse.translations[translation]}&rdquo;
              </p>
            </div>
          </div>

          {/* Movement 4: The Invitation (Grace & Eternal Life) */}
          <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/30 print:border print:border-gray-300 print:bg-white print-break-inside-avoid flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 print:text-black uppercase tracking-wider">
                  4. The Invitation
                </span>
                <span className="text-[10px] font-mono font-bold text-gospel-muted print:text-gray-600">
                  {GOSPEL_STEPS[3].keyVerse.reference}
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-emerald-600 dark:text-emerald-400 print:text-black mb-1">
                A Free Gift Received by Faith
              </h4>
              <p className="text-xs text-gospel-muted print:text-gray-800 leading-relaxed mb-3">
                Salvation is not earned by striving; it is a free gift received through trusting Jesus. Turn from running your own life and welcome Him as your Lord and Savior.
              </p>
            </div>
            <div className="pt-2 border-t border-emerald-500/20 print:border-gray-200">
              <p className="text-[11px] italic text-gospel-text print:text-gray-700">
                &ldquo;{GOSPEL_STEPS[3].keyVerse.translations[translation]}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Response Prayer & Local Church Stamp */}
        <div className="rounded-2xl p-5 bg-gospel-surface-raised border border-gospel-border print:border print:border-gray-400 print:bg-gray-50 print-break-inside-avoid mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center print:gap-3">
            <div className="md:col-span-1">
              <h4 className="font-display font-bold text-sm sm:text-base text-gospel-text print:text-black">
                How to Respond in Prayer:
              </h4>
              <p className="text-xs text-gospel-muted print:text-gray-700 mt-1 leading-relaxed">
                If you are ready to place your trust in Jesus today, you can express it in this simple, heartfelt prayer:
              </p>
            </div>
            <div className="md:col-span-2">
              <blockquote className="text-xs sm:text-sm italic text-gospel-text print:text-black leading-relaxed border-l-2 border-amber-500 print:border-black pl-3 py-0.5">
                &ldquo;{SAMPLE_PRAYER.text}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        {/* Notes & Local Church Contact Box (For Ministry Printouts) */}
        <div className="p-3.5 rounded-xl border border-dashed border-gospel-border print:border-gray-400 print-break-inside-avoid text-xs text-gospel-muted print:text-gray-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="font-bold text-gospel-text print:text-black block">
              ⛪ Connect With a Local Church Family:
            </span>
            <span>
              Find healthy, Bible-believing churches near you at: <strong className="font-mono text-gospel-text print:text-black">one-page-gospel.vercel.app/churches</strong>
            </span>
          </div>
          <div className="hidden print:block w-48 h-12 border border-gray-300 rounded-lg text-center pt-2 text-[10px] text-gray-500">
            [ Local Church Stamp / Contact ]
          </div>
        </div>

        {/* Tract Footer */}
        <div className="mt-5 pt-3 border-t border-gospel-border/60 print:border-gray-300 text-center text-[10px] text-gospel-muted print:text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Scripture quotations marked {translation}.</span>
          <span className="font-medium">The One Page Gospel — Freely printable and shareable for encouragement and truth.</span>
        </div>
      </div>
    </div>
  );
}
