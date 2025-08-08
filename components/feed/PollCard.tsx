import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MoreHorizontal } from 'lucide-react-native';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { IconButton } from '@/components/ui/IconButton';

interface PollOption {
  id: string;
  text: string;
  percentage: number;
  selected?: boolean;
}

interface Poll {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  question: string;
  options: PollOption[];
}

interface PollCardProps {
  poll: Poll;
  onVote?: (optionId: string) => void;
}

export function PollCard({ poll, onVote }: PollCardProps) {
  return (
    <Card>
      <View style={styles.header}>
        <View style={styles.authorInfo}>
          <Avatar source={poll.avatar} size={40} />
          <View>
            <Text style={styles.authorName}>{poll.author}</Text>
            <Text style={styles.timeAgo}>{poll.timeAgo}</Text>
          </View>
        </View>
        <IconButton icon={MoreHorizontal} onPress={() => {}} />
      </View>
      
      <Text style={styles.question}>{poll.question}</Text>
      
      {poll.options.map((option) => (
        <TouchableOpacity 
          key={option.id}
          style={styles.option}
          onPress={() => onVote?.(option.id)}
        >
          <View style={styles.optionContent}>
            <View style={[styles.radioButton, option.selected && styles.selectedRadio]} />
            <Text style={styles.optionText}>{option.text}</Text>
          </View>
          <Text style={styles.percentage}>{option.percentage.toFixed(2)} %</Text>
        </TouchableOpacity>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  timeAgo: {
    fontSize: 14,
    color: '#6B7280',
  },
  question: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    marginBottom: 8,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#D1D5DB',
  },
  selectedRadio: {
    borderColor: '#4F46E5',
    backgroundColor: '#4F46E5',
  },
  optionText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  percentage: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
});