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

          {/* Minimal nav */}
          <nav className="flex items-center gap-6">
            <Link
              href="/#canon"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Canon
            </Link>
            <Link
              href="/#guests"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Guests
            </Link>
            <Link
              href="/#tools"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/#follow"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Follow
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
