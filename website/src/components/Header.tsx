'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - simple, understated */}
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <span className="text-lg tracking-tight">Let&apos;s Vibe!</span>
          </Link>

          {/* Minimal nav - just what matters */}
          <nav className="flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              About
            </Link>
            <a
              href="https://github.com/brightseth/lets-vibe-podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
