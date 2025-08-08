import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '@/components/ui/Card';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { ListItem } from '@/components/ui/ListItem';

interface RequestData {
  id: string;
  date: string;
  category: string;
  status: 'draft' | 'pending' | 'approved' | 'rejected';
}

interface RequestCardProps {
  request: RequestData;
  onPress?: () => void;
}

export function RequestCard({ request, onPress }: RequestCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Others': '#2563EB',
      'Leave': '#EF4444',
      'Expense': '#10B981',
      'Holiday': '#F59E0B',
    };
    return colors[category as keyof typeof colors] || '#6B7280';
  };

  return (
    <Card style={styles.card}>
      <ListItem
        title={request.id}
        subtitle={request.date}
        leftIcon={
          <View style={styles.categoryIndicator}>
            <View style={[
              styles.categoryDot,
              { backgroundColor: getCategoryColor(request.category) }
            ]} />
            <Text style={styles.categoryText}>{request.category}</Text>
          </View>
        }
        rightIcon={<StatusIndicator status={request.status} />}
        onPress={onPress}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    marginBottom: 8,
  },
  categoryIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  categoryDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  categoryText: {
    fontSize: 14,
    color: '#374151',
  },
});