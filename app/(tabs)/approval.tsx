import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle, XCircle, Clock, User, Calendar } from 'lucide-react-native';

const approvalRequests = [
  {
    id: '1',
    type: 'Leave Request',
    requester: 'John Doe',
    date: '2025-01-15 to 2025-01-17',
    reason: 'Family vacation',
    status: 'pending',
    submittedAt: '2 hours ago'
  },
  {
    id: '2',
    type: 'Expense Claim',
    requester: 'Sarah Wilson',
    amount: '$245.50',
    reason: 'Client meeting expenses',
    status: 'pending',
    submittedAt: '1 day ago'
  },
  {
    id: '3',
    type: 'Leave Request',
    requester: 'Mike Johnson',
    date: '2025-01-20',
    reason: 'Medical appointment',
    status: 'approved',
    submittedAt: '3 days ago'
  }
];

export default function ApprovalScreen() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return '#059669';
      case 'rejected': return '#DC2626';
      default: return '#D97706';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'rejected': return XCircle;
      default: return Clock;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Approval Requests</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {approvalRequests.map((request) => {
          const StatusIcon = getStatusIcon(request.status);
          const statusColor = getStatusColor(request.status);
          
          return (
            <View key={request.id} style={styles.requestCard}>
              <View style={styles.requestHeader}>
                <View style={styles.requestInfo}>
                  <Text style={styles.requestType}>{request.type}</Text>
                  <View style={styles.requesterInfo}>
                    <User size={16} color="#6B7280" />
                    <Text style={styles.requesterName}>{request.requester}</Text>
                  </View>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: `${statusColor}15` }]}>
                  <StatusIcon size={16} color={statusColor} />
                  <Text style={[styles.statusText, { color: statusColor }]}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </Text>
                </View>
              </View>
              
              <View style={styles.requestDetails}>
                {request.date && (
                  <View style={styles.detailRow}>
                    <Calendar size={16} color="#6B7280" />
                    <Text style={styles.detailText}>{request.date}</Text>
                  </View>
                )}
                {request.amount && (
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Amount:</Text>
                    <Text style={styles.detailText}>{request.amount}</Text>
                  </View>
                )}
                <Text style={styles.reasonText}>{request.reason}</Text>
              </View>
              
              <View style={styles.requestFooter}>
                <Text style={styles.submittedTime}>Submitted {request.submittedAt}</Text>
                {request.status === 'pending' && (
                  <View style={styles.actionButtons}>
                    <TouchableOpacity style={[styles.actionButton, styles.rejectButton]}>
                      <Text style={styles.rejectButtonText}>Reject</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.approveButton]}>
                      <Text style={styles.approveButtonText}>Approve</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  requestCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  requestInfo: {
    flex: 1,
  },
  requestType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  requesterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  requesterName: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  requestDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  detailText: {
    fontSize: 14,
    color: '#6B7280',
  },
  reasonText: {
    fontSize: 14,
    color: '#374151',
    fontStyle: 'italic',
    marginTop: 4,
  },
  requestFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  submittedTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
  },
  rejectButton: {
    backgroundColor: 'white',
    borderColor: '#DC2626',
  },
  approveButton: {
    backgroundColor: '#059669',
    borderColor: '#059669',
  },
  rejectButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#DC2626',
  },
  approveButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
});