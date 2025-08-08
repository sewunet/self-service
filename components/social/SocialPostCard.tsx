import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { IconButton } from '@/components/ui/IconButton';
import { EllipsisVertical, MessageCircle, ThumbsUp } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PostData {
  id: number;
  author: string;
  avatar: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
}

interface SocialPostCardProps {
  post: PostData;
  onLike?: () => void;
  onComment?: () => void;
  onMore?: () => void;
}

export function SocialPostCard({ post, onLike, onComment, onMore }: SocialPostCardProps) {
  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <Avatar source={post.avatar} size={40} fallback={post.author[0]} />
        <View style={styles.authorInfo}>
          <Text style={styles.authorName}>{post.author}</Text>
          <Text style={styles.timeAgo}>{post.timeAgo}</Text>
        </View>
        <IconButton
          icon={<EllipsisVertical size={20} color="#9CA3AF" />}
          onPress={onMore}
          size={32}
        />
      </View>
      
      <Text style={styles.content}>{post.content}</Text>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={onLike}>
          <ThumbsUp size={18} color={post.likes > 0 ? '#2563EB' : '#9CA3AF'} />
          <Text style={[styles.actionText, post.likes > 0 && styles.activeActionText]}>
            {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onComment}>
          <MessageCircle size={18} color="#9CA3AF" />
          <Text style={styles.actionText}>{post.comments} Comments</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorInfo: {
    flex: 1,
    marginLeft: 12,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  timeAgo: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  content: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  activeActionText: {
    color: '#2563EB',
  },
});