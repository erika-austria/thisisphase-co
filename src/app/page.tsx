import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { REDESIGN } from '@/lib/redesign';

export const metadata: Metadata = buildMetadata({
  title: `The PHASE™ · Four rooms, one reinvention`,
  description: `You are not in a phase. You are in The PHASE™. The whole season of rebuilding everything: the body, the family, the voice, the work.`,
  path: '/',
});

export default function Page() {
  const f = REDESIGN['home'];
  return (
    <div className={f.wrap}>
      <style dangerouslySetInnerHTML={{ __html: f.css }} />
      <div dangerouslySetInnerHTML={{ __html: f.html }} />
    </div>
  );
}
