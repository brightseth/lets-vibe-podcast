export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-[700px] mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
          <p>Seth Goldstein & Ian Rogers</p>
          <div className="flex gap-6">
            <a
              href="https://twitter.com/seth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              @seth
            </a>
            <a
              href="https://twitter.com/iancr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              @iancr
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
