import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { REDESIGN } from '@/lib/redesign';
import { RedesignForms } from '@/components/RedesignForms';

export const metadata: Metadata = buildMetadata({
  title: `About · The PHASE™ · Erika Hanafin Austria`,
  description: `The PHASE™ is four rooms, one reinvention, written by Erika Hanafin Austria from inside the wreckage.`,
  path: '/about',
});

export default function Page() {
  const f = REDESIGN['about'];
  return (
    <div className={f.wrap}>
      <style dangerouslySetInnerHTML={{ __html: f.css }} />
      <div dangerouslySetInnerHTML={{ __html: f.html }} />
      <RedesignForms />
    </div>
  );
}
