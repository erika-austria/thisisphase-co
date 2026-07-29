import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-navy text-cream mt-24">
      <div className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link href="/" className="font-serif text-2xl">
            The <span className="italic text-pink">PHASE</span>
            <sup className="text-sm ml-0.5">™</sup>
          </Link>
          <p className="mt-4 text-cream/80 max-w-sm leading-relaxed">
            Five volumes. One body-truth. Built for the woman who walked out of her fourth doctor&apos;s office with no answers.
          </p>
          <p className="mt-6 text-cream/60 text-sm">
            From <Link href="https://momumentalmoments.co" className="text-pink hover:underline">MOMumental Moments®</Link>
          </p>
        </div>

        <div>
          <p className="eyebrow eyebrow-cream mb-4">The Volumes</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/vol/perimenopause" className="hover:text-pink transition">I · Perimenopause</Link></li>
            <li><Link href="/vol/hormones" className="hover:text-pink transition">II · Hormones</Link></li>
            <li><Link href="/vol/architecture" className="hover:text-pink transition">III · Architecture</Link></li>
            <li><Link href="/vol/self-trust" className="hover:text-pink transition">IV · Self-trust</Link></li>
            <li><Link href="/vol/execution" className="hover:text-pink transition">V · Execution</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow eyebrow-cream mb-4">More</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/series" className="hover:text-pink transition">The Series</Link></li>
            <li><Link href="/journal" className="hover:text-pink transition">The Journal</Link></li>
            <li><Link href="/decode" className="hover:text-pink transition">Decode Your Symptoms</Link></li>
            <li><Link href="/about" className="hover:text-pink transition">About</Link></li>
            <li><Link href="/community" className="hover:text-pink transition">Community</Link></li>
            <li><Link href="/faq" className="hover:text-pink transition">FAQ</Link></li>
            <li><Link href="https://momumentalmoments.co" className="hover:text-pink transition">MOMumental Moments® →</Link></li>
            <li><Link href="https://erikahanafin.com" className="hover:text-pink transition">erikahanafin.com →</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-cream/60 text-xs">
          <div>© {new Date().getFullYear()} MOMumental Moments®. The PHASE™ is a trademark of MOMumental Moments®.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-pink transition">Privacy</Link>
            <Link href="/terms" className="hover:text-pink transition">Terms</Link>
            <Link href="/disclaimer" className="hover:text-pink transition">Disclaimer</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 py-4 text-cream/50 text-xs italic leading-relaxed">
          The PHASE™ is educational content from a certified holistic health coach. Not medical advice. Always consult your healthcare provider before making changes to medications, supplements, or treatment protocols. Some links on this site are affiliate links. I only recommend products I personally use. As an Amazon Associate I earn from qualifying purchases.
        </div>
      </div>
    </footer>
  );
}
