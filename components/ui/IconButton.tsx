import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Video as LucideIcon } from 'lucide-react-native';

interface IconButtonProps {
  icon: LucideIcon;
  onPress: () => void;
  size?: number;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
}

export function IconButton({ 
  icon: Icon, 
  onPress, 
  size = 24, 
  color = '#6B7280',
  backgroundColor = 'transparent',
  style 
}: IconButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Icon size={size} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});