import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video as LucideIcon } from 'lucide-react-native';
import { Card } from '@/components/ui/Card';

interface Update {
  id: string;
  type: string;
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
  color: string;
}

interface UpdateCardProps {
  update: Update;
}

export function UpdateCard({ update }: UpdateCardProps) {
  return (
    <Card style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: `${update.color}15` }]}>
        <update.icon size={24} color={update.color} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{update.title}</Text>
        <Text style={styles.description}>{update.description}</Text>
        <Text style={styles.time}>{update.time}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});