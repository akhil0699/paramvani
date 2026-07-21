import { redirect } from 'next/navigation';
import TalkPage from '@/components/TalkPage';
import { isLordId } from '@/lib/lords';

type Props = { params: Promise<{ lordId: string }> };

export default async function TalkLordPage({ params }: Props) {
  const { lordId } = await params;
  if (!isLordId(lordId)) {
    redirect('/choose');
  }
  return <TalkPage />;
}
