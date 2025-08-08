import { ActionCard } from '@/components/ActionCard';
import { Video as LucideIcon } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface QuickAction {
  icon: typeof LucideIcon;
  title: string;
  color: string;
  onPress?: () => void;
}

interface QuickActionGridProps {
  actions: QuickAction[];
  columns?: number;
}

export function QuickActionGrid({ actions, columns = 2 }: QuickActionGridProps) {
  return (
    <View style={styles.grid}>
      {actions.map((action, index) => (
        <View key={index} style={[styles.gridItem, { width: `${100 / columns - 2}%` }]}>
          <ActionCard
            icon={action.icon}
            title={action.title}
            color={action.color}
            onPress={action.onPress}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  gridItem: {
    marginBottom: 12,
  },
});