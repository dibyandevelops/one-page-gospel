import React from "react";
import Link from "next/link";
import { BookOpen, Heart, Sparkles, Compass, AlertTriangle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gospel-border bg-gospel-surface/60 py-12 px-4 sm:px-6 mt-16 no-print">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-extrabold text-base text-gospel-text tracking-tight block">
                One Page Gospel
              </span>
              <p className="text-xs text-gospel-muted">
                Communicating eternal hope with clarity and modern beauty.
              </p>
            </div>
          </div>

          {/* Deep Dive Feature Pages */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
            <Link
              href="/the-problem"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border hover:border-rose-500/50 hover:text-rose-500 transition-colors"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
              <span>The Problem</span>
            </Link>
            <Link
              href="/miracles"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border hover:border-amber-500/50 hover:text-amber-500 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Miracles of Jesus</span>
            </Link>
            <Link
              href="/parables"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border hover:border-emerald-500/50 hover:text-emerald-500 transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-emerald-500" />
              <span>Parables &amp; Meaning</span>
            </Link>
            <Link
              href="/churches"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gospel-surface border border-gospel-border hover:border-sky-500/50 hover:text-sky-500 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              <span>Churches Nearby</span>
            </Link>
            <Link
              href="/study"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-500 hover:text-slate-950 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Study Guide</span>
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-gospel-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gospel-muted">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/#creation-purpose" className="hover:text-amber-500 transition-colors">
              Creation
            </Link>
            <Link href="/#the-fall-separation" className="hover:text-amber-500 transition-colors">
              Separation
            </Link>
            <Link href="/#the-cross-redemption" className="hover:text-amber-500 transition-colors">
              The Cross
            </Link>
            <Link href="/#the-gift-faith" className="hover:text-amber-500 transition-colors">
              Faith &amp; Grace
            </Link>
            <Link href="/#prayer" className="hover:text-amber-500 transition-colors">
              Prayer
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <span>Made with reverence &amp; care</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}

