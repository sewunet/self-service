import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { IconButton } from '@/components/ui/IconButton';
import { EllipsisVertical } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PollOption {
  text: string;
  percentage: number;
}

interface PollData {
  id: number;
  author: string;
  role?: string;
  avatar: string;
  timeAgo: string;
  question: string;
  options: PollOption[];
}

interface PollPostCardProps {
  poll: PollData;
  onVote?: (optionIndex: number) => void;
  onMore?: () => void;
}

export function PollPostCard({ poll, onVote, onMore }: PollPostCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleVote = (index: number) => {
    setSelectedOption(index);
    onVote?.(index);
  };

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <Avatar source={poll.avatar} size={40} fallback={poll.author[0]} />
        <View style={styles.authorInfo}>
          <Text style={styles.authorName}>{poll.author}</Text>
          {poll.role && <Text style={styles.role}>{poll.role}</Text>}
          <Text style={styles.timeAgo}>{poll.timeAgo}</Text>
        </View>
        <IconButton
          icon={<EllipsisVertical size={20} color="#9CA3AF" />}
          onPress={onMore}
          size={32}
        />
      </View>
      
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{poll.question}</Text>
      </View>
      
      <View style={styles.optionsContainer}>
        {poll.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === index && styles.selectedOption,
            ]}
            onPress={() => handleVote(index)}
          >
            <View style={styles.optionContent}>
              <View style={[
                styles.optionRadio,
                selectedOption === index && styles.optionRadioSelected
              ]}>
                {selectedOption === index && <View style={styles.optionRadioInner} />}
              </View>
              <Text style={styles.optionText}>{option.text}</Text>
            </View>
            <Text style={styles.percentage}>{option.percentage.toFixed(2)}%</Text>
          </TouchableOpacity>
        ))}
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
  role: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 1,
  },
  timeAgo: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  questionContainer: {
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  question: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  optionsContainer: {
    gap: 8,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
  },
  selectedOption: {
    borderColor: '#2563EB',
    backgroundColor: '#EFF6FF',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionRadio: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionRadioSelected: {
    borderColor: '#2563EB',
  },
  optionRadioInner: {
    width: 8,
    height: 8,
    backgroundColor: '#2563EB',
    borderRadius: 4,
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