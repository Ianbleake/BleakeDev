'use client';

import DetailInfoCard from '@/components/admin/ui/DetailInfoCard';
import { useParams } from 'next/navigation';
import React from 'react';

export default function ExperienceDetailPage(): React.ReactElement {

  const params = useParams();
  const experienceId = params.id;

  return (
    <div className="flex flex-col gap-4">



    </div>
  );
}