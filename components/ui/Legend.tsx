import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LegendItem {
  color: string;
  label: string;
}

interface LegendProps {
  items: LegendItem[];
  layout?: 'horizontal' | 'vertical';
}

export function Legend({ items, layout = 'horizontal' }: LegendProps) {
  return (
    <View style={[
      styles.container,
      layout === 'vertical' ? styles.vertical : styles.horizontal
    ]}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <View style={[styles.dot, { backgroundColor: item.color }]} />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  vertical: {
    flexDirection: 'column',
    gap: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  label: {
    fontSize: 12,
    color: '#6B7280',
  },
});