import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '@/components/ui/Header';
import { ApprovalCard } from '@/components/approval/ApprovalCard';

const approvalRequests = [
  {
    id: '1',
    type: 'Leave Request',
    requester: 'John Doe',
    date: '2025-01-15 to 2025-01-17',
    reason: 'Family vacation',
    status: 'pending' as const,
    submittedAt: '2 hours ago'
  },
  {
    id: '2',
    type: 'Expense Claim',
    requester: 'Sarah Wilson',
    amount: '$245.50',
    reason: 'Client meeting expenses',
    status: 'pending' as const,
    submittedAt: '1 day ago'
  },
  {
    id: '3',
    type: 'Leave Request',
    requester: 'Mike Johnson',
    date: '2025-01-20',
    reason: 'Medical appointment',
    status: 'approved' as const,
    submittedAt: '3 days ago'
  }
];

export default function ApprovalScreen() {
  const handleApprove = (id: string) => {
    console.log('Approved request:', id);
  };

  const handleReject = (id: string) => {
    console.log('Rejected request:', id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Approval Requests" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {approvalRequests.map((request) => (
          <ApprovalCard
            key={request.id}
            request={request}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
});