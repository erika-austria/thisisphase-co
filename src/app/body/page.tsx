import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { REDESIGN } from '@/lib/redesign';

export const metadata: Metadata = buildMetadata({
  title: `The Body · Perimenopause · The PHASE™`,
  description: `Room I · The Body. The map you should have been handed at 38. Test, do not guess. Five volumes on perimenopause, hormones, labs, and HRT.`,
  path: '/body',
});

export default function Page() {
  const f = REDESIGN['body'];
  return (
    <div className={f.wrap}>
      <style dangerouslySetInnerHTML={{ __html: f.css }} />
      <div dangerouslySetInnerHTML={{ __html: f.html }} />
    </div>
  );
}
