import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StatItem } from '@/components/ui/StatItem';
import { Legend } from '@/components/ui/Legend';

interface AttendanceData {
  month: string;
  present: number;
  absent: number;
  dayOff: number;
  totalDays: number;
}

interface AttendanceCardProps {
  data: AttendanceData;
}

export function AttendanceCard({ data }: AttendanceCardProps) {
  const { month, present, absent, dayOff, totalDays } = data;

  const progressSegments = [
    { value: present, color: '#10B981' },
    { value: absent, color: '#EF4444' },
    { value: totalDays - present - absent - dayOff, color: '#E5E7EB' },
  ];

  const legendItems = [
    { color: '#10B981', label: 'Present' },
    { color: '#EF4444', label: 'Absent' },
    { color: '#F59E0B', label: 'Day off' },
  ];

  return (
    <Card>
      <Badge text={month} variant="primary" />
      
      <View style={styles.statsContainer}>
        <StatItem value={present} label="Days" color="#10B981" showDot />
        <StatItem value={absent} label="Days" color="#EF4444" showDot />
        <StatItem value={dayOff} label="Days" color="#F59E0B" showDot />
        <Text style={styles.totalDays}>{totalDays} Days</Text>
      </View>
      
      <View style={styles.progressContainer}>
        <ProgressBar segments={progressSegments} />
      </View>
      
      <Legend items={legendItems} />
    </Card>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    gap: 16,
  },
  totalDays: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 'auto',
  },
  progressContainer: {
    marginBottom: 16,
  },
});