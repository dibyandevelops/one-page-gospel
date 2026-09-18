import React from "react";
import { BookOpen, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gospel-border bg-gospel-surface/60 py-12 px-4 sm:px-6 mt-16 no-print">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="font-display font-extrabold text-sm text-gospel-text tracking-tight">
              One Page Gospel
            </span>
            <p className="text-xs text-gospel-muted">
              Communicating eternal hope with clarity and beauty.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gospel-muted">
          <a href="#creation-purpose" className="hover:text-amber-500 transition-colors">
            Creation
          </a>
          <a href="#the-fall-separation" className="hover:text-amber-500 transition-colors">
            Separation
          </a>
          <a href="#the-cross-redemption" className="hover:text-amber-500 transition-colors">
            The Cross
          </a>
          <a href="#the-gift-faith" className="hover:text-amber-500 transition-colors">
            Faith & Grace
          </a>
          <a href="#prayer" className="hover:text-amber-500 transition-colors">
            Prayer
          </a>
        </div>

        <div className="text-xs text-gospel-muted flex items-center gap-1">
          <span>Made with reverence &amp; care</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </div>
      </div>
    </footer>
  );
}
