import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, roomItemListSchema } from '@/lib/schema';
import { getRoom } from '@/lib/rooms';
import { RoomPage } from '@/components/RoomPage';

const room = getRoom('voice')!;

export const metadata: Metadata = buildMetadata({
  title: room.metaTitle,
  description: room.metaDescription,
  path: '/voice',
  ogImage: '/og/room-voice.jpg',
});

export default function VoiceRoomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thephase.co' },
              { name: `The ${room.name} Room`, url: `https://thephase.co/voice` },
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
