import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { REDESIGN } from '@/lib/redesign';

export const metadata: Metadata = buildMetadata({
  title: `The Voice · Self-Trust & Confidence · The PHASE™`,
  description: `Room III · The Voice. Self-Trust and Confidence, Vol. IV. Coming back to your own knowing.`,
  path: '/voice',
});

export default function Page() {
  const f = REDESIGN['voice'];
  return (
    <div className={f.wrap}>
      <style dangerouslySetInnerHTML={{ __html: f.css }} />
      <div dangerouslySetInnerHTML={{ __html: f.html }} />
    </div>
  );
}
