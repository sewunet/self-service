import { QuickActionGrid } from '@/components/actions/QuickActionGrid';
import { AttendanceOverview } from '@/components/AttendanceOverview';
import { Header } from '@/components/Header';
import { LeaveBalanceCard } from '@/components/LeaveBalanceCard';
import { PendingRequestCard } from '@/components/PendingRequestCard';
import { SalaryCard } from '@/components/SalaryCard';
import { Section } from '@/components/ui/Section';
import { ArrowRightLeft, Bed, Calendar, Clipboard, CreditCard, DollarSign, MapPin, Receipt, UserCheck } from 'lucide-react-native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

export default function HomeScreen() {
  const actionItems = [
    { icon: DollarSign, title: 'Expense', color: '#10B981' },
    { icon: Calendar, title: 'Holiday', color: '#F59E0B' },
    { icon: Clipboard, title: 'Orders', color: '#2563EB' },
    { icon: Bed, title: 'Leave', color: '#EF4444' },
    { icon: UserCheck, title: 'Attendance', color: '#8B5CF6' },
    { icon: MapPin, title: 'Visit', color: '#06B6D4' },
    { icon: Receipt, title: 'Payroll', color: '#84CC16' },
    { icon: ArrowRightLeft, title: 'Transactions', color: '#F97316' },
    { icon: CreditCard, title: 'Payment', color: '#EC4899' },
  ];

  const handleActionPress = (title: string) => {
    console.log(`Pressed ${title}`);
  };

  const actionsWithHandlers = actionItems.map(item => ({
    ...item,
    onPress: () => handleActionPress(item.title),
  }));

  const handleRequestPress = () => {
    console.log('Request pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <AttendanceOverview />
        
        <Section title="Leave Balance">
          <View style={styles.leaveBalanceContainer}>
            <LeaveBalanceCard
              title="Compensatory Off"
              balance={8.0}
              allocated={12.0}
              color="#2563EB"
            />
            <LeaveBalanceCard
              title="Sick Leave"
              balance={0.0}
              allocated={6.0}
              color="#9CA3AF"
            />
          </View>
        </Section>

        <SalaryCard />

        <Section title="What would you like to do?">
          <QuickActionGrid actions={actionsWithHandlers} />
        </Section>

        <Section title="Pending requests">
          <PendingRequestCard
            id="HR-EXP-2025-00139"
            date="24-03-2025"
            category="Others"
            status="Draft"
            onPress={handleRequestPress}
          />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  leaveBalanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
});