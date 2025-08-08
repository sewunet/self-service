import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Video as LucideIcon } from 'lucide-react-native';

interface BadgeProps {
  text: string;
  icon?: LucideIcon;
  color: string;
  style?: ViewStyle;
}

export function Badge({ text, icon: Icon, color, style }: BadgeProps) {
  return (
    <View style={[styles.badge, { backgroundColor: `${color}15` }, style]}>
      {Icon && <Icon size={16} color={color} />}
      <Text style={[styles.text, { color }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
  },
});