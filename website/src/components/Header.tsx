'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--border)]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <span className="text-lg tracking-tight">Let&apos;s Vibe!</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/episodes"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Episodes
            </Link>
            <Link
              href="/about"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/links"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Subscribe
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden pb-6 space-y-4">
            <Link
              href="/episodes"
              className="block text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Episodes
            </Link>
            <Link
              href="/about"
              className="block text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/links"
              className="block text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Subscribe
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
