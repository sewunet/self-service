import React from 'react';
import { SocialPostCard } from '@/components/social/SocialPostCard';

interface PostCardProps {
  post: {
    id: number;
    author: string;
    avatar: string;
    timeAgo: string;
    content: string;
    likes: number;
    comments: number;
  };
  onLike?: () => void;
  onComment?: () => void;
  onMore?: () => void;
}

export function PostCard({ post, onLike, onComment, onMore }: PostCardProps) {
  return (
    <SocialPostCard 
      post={post} 
      onLike={onLike}
      onComment={onComment}
      onMore={onMore}
    />
  );
}