import React from 'react';
import { RequestCard } from '@/components/requests/RequestCard';

interface PendingRequestCardProps {
  id: string;
  date: string;
  category: string;
  status: string;
  onPress?: () => void;
}

export function PendingRequestCard({ id, date, category, status, onPress }: PendingRequestCardProps) {
  const requestData = {
    id,
    date,
    category,
    status: status.toLowerCase() as 'draft' | 'pending' | 'approved' | 'rejected',
  };

  return (
    <RequestCard request={requestData} onPress={onPress} />
  );
}