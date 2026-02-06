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

          {/* Minimal nav — Episodes first, like every real podcast site */}
          <nav className="flex items-center gap-6">
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
            <Link
              href="/studio"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Studio
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
