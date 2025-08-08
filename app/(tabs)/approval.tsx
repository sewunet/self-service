import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Header } from '@/components/Header';
import { PendingRequestCard } from '@/components/PendingRequestCard';
import { Section } from '@/components/ui/Section';

export default function ApprovalScreen() {
  const pendingRequests = [
    {
      id: 'HR-EXP-2025-00139',
      date: '24-03-2025',
      category: 'Others',
      status: 'Draft',
    },
    {
      id: 'HR-LEV-2025-00045',
      date: '20-03-2025',
      category: 'Leave',
      status: 'Pending',
    },
    {
      id: 'HR-EXP-2025-00123',
      date: '18-03-2025',
      category: 'Expense',
      status: 'Approved',
    },
  ];

  const handleRequestPress = (id: string) => {
    console.log(`Request ${id} pressed`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Section title="Pending Requests">
          {pendingRequests.map((request, index) => (
            <PendingRequestCard 
              key={index} 
              {...request}
              onPress={() => handleRequestPress(request.id)}
            />
          ))}
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
});