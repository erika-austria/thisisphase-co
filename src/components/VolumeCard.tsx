import Link from 'next/link';
import Image from 'next/image';
import type { Volume } from '@/lib/volumes';

export function VolumeCard({ volume }: { volume: Volume }) {
  return (
    <article className="group relative bg-cream-alt rounded-sm border border-navy/10 p-6 hover:border-pink/40 transition-all hover:shadow-md">
      {/* Cover image */}
      <Link href={`/vol/${volume.slug}`} className="block mb-5 aspect-[4/5] relative overflow-hidden bg-navy/5">
        <Image
          src={volume.coverImage}
          alt={`${volume.fullTitle} cover`}
          fill
          sizes="(min-width: 768px) 22vw, 90vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={volume.number <= 2}
        />
      </Link>

      {/* Volume number eyebrow */}
      <div className="eyebrow text-xs flex items-center gap-2 mb-2">
        <span className="text-pink font-bold">{volume.letter}</span>
        <span className="text-navy/40">·</span>
        <span>VOL. {volume.numeral}</span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-2xl mb-2">
        <Link href={`/vol/${volume.slug}`} className="hover:text-pink transition">
          {volume.title}
        </Link>
      </h3>

      {/* Tagline */}
      <p className="text-navy/70 text-sm leading-relaxed mb-5 italic font-serif">
        {volume.tagline}
      </p>

      {/* Price + CTA */}
      <div className="flex items-center justify-between border-t border-navy/10 pt-4">
        <span className="font-serif text-xl">
          ${volume.price}
        </span>
        <Link
          href={`/vol/${volume.slug}`}
          className="eyebrow text-xs text-navy hover:text-pink transition"
          aria-label={`Read more about ${volume.fullTitle}`}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
