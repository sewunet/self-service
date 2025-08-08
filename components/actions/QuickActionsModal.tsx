import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Video as LucideIcon } from 'lucide-react-native';
import { Modal } from '@/components/ui/Modal';

interface QuickAction {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  onPress?: () => void;
}

interface QuickActionsModalProps {
  visible: boolean;
  onClose: () => void;
  actions: QuickAction[];
}

export function QuickActionsModal({ visible, onClose, actions }: QuickActionsModalProps) {
  return (
    <Modal visible={visible} onClose={onClose}>
      {actions.map((action, index) => (
        <TouchableOpacity 
          key={action.id} 
          style={[styles.actionItem, index < actions.length - 1 && styles.actionBorder]}
          onPress={() => {
            action.onPress?.();
            onClose();
          }}
        >
          <View style={[styles.actionIcon, { backgroundColor: `${action.color}15` }]}>
            <action.icon size={24} color={action.color} />
          </View>
          <Text style={styles.actionTitle}>{action.title}</Text>
          <Text style={styles.actionArrow}>›</Text>
        </TouchableOpacity>
      ))}
    </Modal>
  );
}

const styles = StyleSheet.create({
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  actionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  actionArrow: {
    fontSize: 20,
    color: '#9CA3AF',
  },
});