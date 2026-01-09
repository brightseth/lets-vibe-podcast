'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Episodes', href: '/episodes' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'Directory', href: '/directory' },
  { name: 'Learn', href: '/learn' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">LV</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">Let&apos;s Vibe!</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[var(--foreground)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Subscribe CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/subscribe"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg hover:opacity-90 transition-opacity"
            >
              Subscribe
            </Link>

            {/* Admin link - visible for now */}
            <Link
              href="/admin"
              className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
