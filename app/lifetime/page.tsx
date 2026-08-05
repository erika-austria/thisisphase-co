import { redirect } from 'next/navigation';

// Lifetime Pass concept removed per Erika's product strategy.
// Upsell ladder: Volumes ($27) → Series ($97) → Reflections Journal ($19 standalone).
export default function LifetimePage() {
  redirect('/series');
}
