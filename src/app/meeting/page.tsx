'use client'

import dynamic from 'next/dynamic';

const Meeting = dynamic(() => import('@/components/meeting/meeting'), { ssr: false })

export default function MeetingPage() {

  return (
    <div className="">
      <Meeting />
    </div>
  );
};
