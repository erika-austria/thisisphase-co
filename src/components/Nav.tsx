import Link from 'next/link';

export function Nav() {
  return (
    <nav className="border-b border-navy/10 bg-cream sticky top-0 z-40 backdrop-blur-sm bg-cream/95">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="The PHASE · Home">
          <span className="text-pink font-serif italic text-3xl leading-none group-hover:text-pink-deep transition">
            ⌐
          </span>
          <span className="font-serif text-xl tracking-tightest">
            The <span className="italic text-pink">PHASE</span>
            <sup className="text-xs ml-0.5">™</sup>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 eyebrow text-sm">
          <Link href="/vol/perimenopause" className="hover:text-pink transition">Perimenopause</Link>
          <Link href="/vol/hormones" className="hover:text-pink transition">Hormones</Link>
          <Link href="/vol/architecture" className="hover:text-pink transition">Architecture</Link>
          <Link href="/vol/self-trust" className="hover:text-pink transition">Self-trust</Link>
          <Link href="/vol/execution" className="hover:text-pink transition">Execution</Link>
          <Link href="/about" className="hover:text-pink transition">About</Link>
        </div>

        <Link href="/series" className="btn-primary text-xs">
          Get The Series →
        </Link>
      </div>
    </nav>
  );
}
