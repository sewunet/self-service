import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { CircleAlert as AlertCircle } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function LogoutModal({ visible, onClose, onConfirm }: LogoutModalProps) {
  return (
    <Modal visible={visible} onClose={onClose} showCloseButton={false}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <AlertCircle size={48} color="#DC2626" />
        </View>
        
        <Text style={styles.title}>Logout</Text>
        <Text style={styles.message}>
          Are you sure you want to logout from this device?
        </Text>
        
        <View style={styles.actions}>
          <Button
            title="Yes, Logout"
            variant="primary"
            onPress={onConfirm}
            style={styles.logoutButton}
          />
          <Button
            title="Cancel"
            variant="secondary"
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  actions: {
    width: '100%',
    gap: 12,
  },
  logoutButton: {
    width: '100%',
  },
});