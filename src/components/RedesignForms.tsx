'use client';

/**
 * RedesignForms · progressive enhancement for the ported redesign pages.
 *
 * The redesign markup is injected as static HTML (dangerouslySetInnerHTML), so its
 * email-capture blocks (.field) are inert on their own. This component wires each one
 * to the real funnels on mount:
 *   · aria-label contains "report"  → POST /api/report   (State of Reinvention PDF)
 *   · everything else               → POST /api/newsletter (Tuesday letter)
 * On success it swaps the field for an inbox confirmation (and the report download link).
 */

import { useEffect } from 'react';

export function RedesignForms() {
  useEffect(() => {
    const fields = Array.from(document.querySelectorAll<HTMLElement>('.field'));

    fields.forEach((field) => {
      const f = field as HTMLElement & { __wired?: boolean };
      if (f.__wired) return;
      f.__wired = true;

      const input = field.querySelector<HTMLInputElement>('input');
      const trigger =
        field.querySelector<HTMLElement>('button, [type="submit"]') ||
        (field.lastElementChild as HTMLElement | null);
      const onNavy = field.classList.contains('field--onnavy');

      const label = (field.getAttribute('aria-label') || '').toLowerCase();
      const isReport = label.includes('report') || /send me the report/i.test(field.textContent || '');
      const endpoint = isReport ? '/api/report' : '/api/newsletter';
      const source = isReport ? 'redesign-report' : 'redesign-letter';

      let busy = false;

      async function submit() {
        if (busy) return;
        const email = (input?.value || '').trim().toLowerCase();
        if (!email || !email.includes('@')) {
          input?.focus();
          return;
        }
        busy = true;
        const original = trigger ? trigger.textContent : '';
        if (trigger) trigger.textContent = 'Sending…';

        try {
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, source }),
          });
          const data = (await res.json().catch(() => ({}))) as {
            error?: string;
            downloadUrl?: string;
          };
          if (!res.ok) throw new Error(data?.error || 'Network error');

          const color = onNavy ? 'var(--cream, #fff9f1)' : 'var(--navy, #2f4858)';
          if (isReport && data.downloadUrl) {
            field.innerHTML =
              '<a class="btn btn--mint" style="width:100%;justify-content:center" href="' +
              data.downloadUrl +
              '">Open the report →</a>';
          } else {
            field.innerHTML =
              '<div style="padding:13px 4px;font:500 13px/1.5 var(--sans, inherit);color:' +
              color +
              '">Check your inbox. It is on the way.</div>';
          }
        } catch {
          if (trigger) trigger.textContent = original || 'Try again';
          busy = false;
        }
      }

      if (field.tagName === 'FORM') {
        field.addEventListener('submit', (e) => {
          e.preventDefault();
          submit();
        });
      }
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          submit();
        });
      }
      if (input) {
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            submit();
          }
        });
      }
    });
  }, []);

  return null;
}
