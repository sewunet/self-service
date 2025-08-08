import React, { useState } from 'react';
import { PollPostCard } from '@/components/social/PollPostCard';

interface PollCardProps {
  poll: {
    id: number;
    author: string;
    role?: string;
    avatar: string;
    timeAgo: string;
    question: string;
    options: { text: string; percentage: number }[];
  };
  onVote?: (optionIndex: number) => void;
  onMore?: () => void;
}

export function PollCard({ poll, onVote, onMore }: PollCardProps) {

  return (
    <PollPostCard poll={poll} onVote={onVote} onMore={onMore} />
  );
}