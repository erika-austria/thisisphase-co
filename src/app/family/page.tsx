import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { REDESIGN } from '@/lib/redesign';

export const metadata: Metadata = buildMetadata({
  title: `The Family · The Co-Parenting Power Method® · The PHASE™`,
  description: `Room II · The Family. Twenty scripts already written, for the messages you dread sending. The playbook for the two-house rebuild.`,
  path: '/family',
});

export default function Page() {
  const f = REDESIGN['family'];
  return (
    <div className={f.wrap}>
      <style dangerouslySetInnerHTML={{ __html: f.css }} />
      <div dangerouslySetInnerHTML={{ __html: f.html }} />
    </div>
  );
}
