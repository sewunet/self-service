import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusIndicatorProps {
  status: 'draft' | 'pending' | 'approved' | 'rejected';
  size?: 'small' | 'medium';
}

export function StatusIndicator({ status, size = 'medium' }: StatusIndicatorProps) {
  const getStatusConfig = () => {
    const configs = {
      draft: { color: '#EF4444', label: 'Draft' },
      pending: { color: '#F59E0B', label: 'Pending' },
      approved: { color: '#10B981', label: 'Approved' },
      rejected: { color: '#EF4444', label: 'Rejected' },
    };
    return configs[status];
  };

  const getSizeStyles = () => {
    const sizes = {
      small: { paddingHorizontal: 6, paddingVertical: 2, fontSize: 10 },
      medium: { paddingHorizontal: 8, paddingVertical: 4, fontSize: 12 },
    };
    return sizes[size];
  };

  const statusConfig = getStatusConfig();
  const sizeStyles = getSizeStyles();

  return (
    <View style={[
      styles.badge,
      { backgroundColor: `${statusConfig.color}20` },
      { paddingHorizontal: sizeStyles.paddingHorizontal, paddingVertical: sizeStyles.paddingVertical }
    ]}>
      <Text style={[
        styles.text,
        { color: statusConfig.color, fontSize: sizeStyles.fontSize }
      ]}>
        {statusConfig.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: '500',
  },
});