import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatItemProps {
  value: string | number;
  label: string;
  color?: string;
  showDot?: boolean;
}

export function StatItem({ value, label, color = '#374151', showDot = false }: StatItemProps) {
  return (
    <View style={styles.container}>
      {showDot && <View style={[styles.dot, { backgroundColor: color }]} />}
      <Text style={[styles.value, { color }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
  },
});