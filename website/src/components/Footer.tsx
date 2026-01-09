import Link from 'next/link';

const footerLinks = {
  podcast: [
    { name: 'Episodes', href: '/episodes' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Subscribe', href: '/subscribe' },
  ],
  community: [
    { name: 'Directory', href: '/directory' },
    { name: 'Submit Project', href: '/directory/submit' },
    { name: '/vibe', href: 'https://slashvibe.dev', external: true },
  ],
  ecosystem: [
    { name: 'vibecodings', href: 'https://vibecodings.vercel.app', external: true },
    { name: 'Spirit Protocol', href: 'https://spiritprotocol.io', external: true },
    { name: 'vibestation', href: '/vibestation' },
  ],
  connect: [
    { name: 'Twitter', href: 'https://twitter.com/letsvibepod', external: true },
    { name: 'YouTube', href: '#', external: true },
    { name: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">LV</span>
              </div>
              <span className="font-semibold">Let&apos;s Vibe!</span>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Weekly conversations with creators shaping AI-assisted creativity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-sm mb-4">Podcast</h4>
            <ul className="space-y-3">
              {footerLinks.podcast.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Ecosystem</h4>
            <ul className="space-y-3">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Let&apos;s Vibe! All rights reserved.
          </p>
          <p className="text-sm text-[var(--muted)]">
            Part of the <Link href="https://spiritprotocol.io" className="hover:text-[var(--foreground)] transition-colors">Spirit Protocol</Link> ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
}
