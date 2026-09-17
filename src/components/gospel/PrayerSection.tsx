"use client";

import React, { useState } from "react";
import { Copy, Check, Heart } from "lucide-react";
import { SAMPLE_PRAYER, NEXT_STEPS } from "@/lib/gospel-data";

export function PrayerSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyPrayer = async () => {
    await navigator.clipboard.writeText(SAMPLE_PRAYER.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="prayer" className="rounded-app-lg p-6 sm:p-10 bg-gospel-surface border border-gospel-border shadow-soft-card my-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mx-auto mb-3 shadow-inner">
            <Heart className="w-6 h-6 fill-amber-500/20" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gospel-text">
            {SAMPLE_PRAYER.title}
          </h2>
          <p className="text-sm sm:text-base text-gospel-muted mt-2 max-w-xl mx-auto">
            {SAMPLE_PRAYER.lead}
          </p>
        </div>

        {/* Prayer Box */}
        <div className="relative rounded-2xl bg-gospel-surface-raised border border-amber-500/30 p-6 sm:p-8 shadow-glow-gold mb-10">
          <div className="flex justify-end mb-2">
            <button
              onClick={handleCopyPrayer}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gospel-surface border border-gospel-border text-gospel-muted hover:text-amber-500 transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Copied Prayer
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Prayer
                </>
              )}
            </button>
          </div>

          <p className="font-serif text-lg sm:text-xl italic text-gospel-text leading-relaxed text-center sm:text-left px-2 sm:px-4">
            &ldquo;{SAMPLE_PRAYER.text}&rdquo;
          </p>
        </div>

        {/* What Comes Next */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-gospel-text mb-6 text-center">
            Walking Forward: 4 Next Steps
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NEXT_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-xl p-5 bg-gospel-surface-raised/60 border border-gospel-border hover:border-amber-500/40 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 dark:text-amber-400 font-bold text-xs flex items-center justify-center">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-sm text-gospel-text">
                    {step.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gospel-muted leading-relaxed pl-8">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
