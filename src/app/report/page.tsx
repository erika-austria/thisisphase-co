import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { REDESIGN } from '@/lib/redesign';
import { RedesignForms } from '@/components/RedesignForms';

export const metadata: Metadata = buildMetadata({
  title: `The MOMumental Report · The PHASE™`,
  description: `The numbers behind the rebuild. Fifteen pages of research on what actually happens to a woman in midlife. Twenty sources, four rooms.`,
  path: '/report',
});

export default function Page() {
  const f = REDESIGN['report'];
  return (
    <div className={f.wrap}>
      <style dangerouslySetInnerHTML={{ __html: f.css }} />
      <div dangerouslySetInnerHTML={{ __html: f.html }} />
      <RedesignForms />
    </div>
  );
}
