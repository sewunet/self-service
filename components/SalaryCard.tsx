import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Section } from '@/components/ui/Section';
import { SalaryDetailsCard } from '@/components/salary/SalaryDetailsCard';

export function SalaryCard() {
  const salaryData = {
    month: 'August 2024',
    amount: 68000.00,
    creditedOn: '31-08-2024',
    workDays: 27,
  };

  const handleViewAll = () => {
    // Handle view all salary details
  };

  const handleViewSlip = () => {
    // Handle view salary slip
  };

  return (
    <Section 
      title="Salary Details"
      headerAction={
        <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAll}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      }
    >
      <SalaryDetailsCard data={salaryData} onViewSlip={handleViewSlip} />
    </Section>
  );
}

const styles = StyleSheet.create({
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
});