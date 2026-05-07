import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = (body?.email ?? '').trim();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // TODO: Replace with actual provider integration:
    // - Substack: POST to Substack subscribe API
    // - ConvertKit: POST to /v3/forms/{form_id}/subscribe
    // - Beehiiv: POST to /v2/publications/{pub_id}/subscriptions
    // - Klaviyo: POST to /api/profiles
    //
    // For now, log and return success so the UI flow works.
    console.log('[newsletter signup]', email, new Date().toISOString());

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[newsletter error]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
