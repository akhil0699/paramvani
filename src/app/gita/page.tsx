import type { Metadata } from 'next';
import GitaSection from '@/components/GitaSection';

export const metadata: Metadata = {
  title: 'Bhagavad Gita — Shloks & Audio | Paramvani',
  description: 'Read and listen to the sacred Bhagavad Gita shloks — Sanskrit, Hindi and English translations with audio recitation.',
};

export default function GitaPage() {
  return (
    <main>
      <GitaSection />
    </main>
  );
}
