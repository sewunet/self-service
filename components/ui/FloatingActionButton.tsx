import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface FloatingActionButtonProps {
  icon: LucideIcon;
  onPress: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
}

export function FloatingActionButton({ 
  icon: Icon, 
  onPress, 
  style,
  backgroundColor = '#4F46E5'
}: FloatingActionButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.fab, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Icon size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});