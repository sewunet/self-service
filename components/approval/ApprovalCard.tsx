import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CircleCheck as CheckCircle, Circle as XCircle, Clock, User, Calendar } from 'lucide-react-native';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ApprovalRequest {
  id: string;
  type: string;
  requester: string;
  date?: string;
  amount?: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

interface ApprovalCardProps {
  request: ApprovalRequest;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

export function ApprovalCard({ request, onApprove, onReject }: ApprovalCardProps) {
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

  const StatusIcon = getStatusIcon(request.status);
  const statusColor = getStatusColor(request.status);

  return (
    <Card>
      <View style={styles.header}>
        <View style={styles.info}>
          <Text style={styles.type}>{request.type}</Text>
          <View style={styles.requesterInfo}>
            <User size={16} color="#6B7280" />
            <Text style={styles.requesterName}>{request.requester}</Text>
          </View>
        </View>
        <Badge
          text={request.status.charAt(0).toUpperCase() + request.status.slice(1)}
          icon={StatusIcon}
          color={statusColor}
        />
      </View>
      
      <View style={styles.details}>
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
      
      <View style={styles.footer}>
        <Text style={styles.submittedTime}>Submitted {request.submittedAt}</Text>
        {request.status === 'pending' && (
          <View style={styles.actionButtons}>
            <Button
              title="Reject"
              variant="outline"
              size="small"
              onPress={() => onReject?.(request.id)}
              style={styles.rejectButton}
              textStyle={styles.rejectText}
            />
            <Button
              title="Approve"
              variant="primary"
              size="small"
              onPress={() => onApprove?.(request.id)}
            />
          </View>
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  info: {
    flex: 1,
  },
  type: {
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
  details: {
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
  footer: {
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
  rejectButton: {
    borderColor: '#DC2626',
  },
  rejectText: {
    color: '#DC2626',
  },
});