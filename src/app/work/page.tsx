import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { REDESIGN } from '@/lib/redesign';
import { RedesignForms } from '@/components/RedesignForms';

export const metadata: Metadata = buildMetadata({
  title: `The Work · Building Through It · The PHASE™`,
  description: `Room IV · The Work. Building Through It. Run your life the way an operator would. Seven tools.`,
  path: '/work',
});

export default function Page() {
  const f = REDESIGN['work'];
  return (
    <div className={f.wrap}>
      <style dangerouslySetInnerHTML={{ __html: f.css }} />
      <div dangerouslySetInnerHTML={{ __html: f.html }} />
      <RedesignForms />
    </div>
  );
}
