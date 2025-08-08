import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CircularProgress } from '@/components/CircularProgress';

interface LeaveBalanceCardProps {
  title: string;
  balance: number;
  allocated: number;
  color: string;
}

export function LeaveBalanceCard({ title, balance, allocated, color }: LeaveBalanceCardProps) {
  const percentage = (balance / allocated) * 100;

  return (
    <View style={styles.card}>
      <CircularProgress
        percentage={percentage}
        size={80}
        strokeWidth={6}
        color={color}
        value={balance.toString()}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.allocated}>Alloted {allocated.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 4,
  },
  allocated: {
    fontSize: 14,
    color: '#6B7280',
  },
});