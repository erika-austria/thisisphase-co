import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, roomItemListSchema } from '@/lib/schema';
import { getRoom } from '@/lib/rooms';
import { RoomPage } from '@/components/RoomPage';

const room = getRoom('work')!;

export const metadata: Metadata = buildMetadata({
  title: room.metaTitle,
  description: room.metaDescription,
  path: '/work',
  ogImage: '/og/room-work.jpg',
});

export default function WorkRoomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thephase.co' },
              { name: `The ${room.name} Room`, url: `https://thephase.co/work` },
            ]),
            roomItemListSchema(room),
            faqSchema(room.faqs),
          ]),
        }}
      />
      <RoomPage room={room} />
    </>
  );
}
