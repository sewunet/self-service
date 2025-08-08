import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react-native';

interface SalaryData {
  month: string;
  amount: number;
  creditedOn: string;
  workDays: number;
  currency?: string;
}

interface SalaryDetailsCardProps {
  data: SalaryData;
  onViewSlip?: () => void;
}

export function SalaryDetailsCard({ data, onViewSlip }: SalaryDetailsCardProps) {
  const { month, amount, creditedOn, workDays, currency = '₹' } = data;

  return (
    <Card>
      <Badge text={month} variant="primary" />
      
      <Text style={styles.amount}>
        {currency} {amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
      </Text>
      
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Credited on</Text>
          <Text style={styles.detailLabel}>Work day</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailValue}>{creditedOn}</Text>
          <Text style={styles.detailValue}>{workDays}</Text>
        </View>
      </View>
      
      <Button
        title="View Salary Slip"
        variant="outline"
        onPress={onViewSlip}
        icon={<ChevronRight size={16} color="#374151" />}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  amount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2563EB',
    marginTop: 16,
    marginBottom: 20,
  },
  details: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
});