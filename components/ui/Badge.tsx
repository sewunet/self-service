import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface BadgeProps {
  text: string;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'small' | 'medium';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Badge({ 
  text, 
  variant = 'primary', 
  size = 'medium',
  style,
  textStyle 
}: BadgeProps) {
  const getVariantStyles = () => {
    const variants = {
      primary: { backgroundColor: '#EFF6FF', color: '#2563EB' },
      success: { backgroundColor: '#ECFDF5', color: '#10B981' },
      warning: { backgroundColor: '#FFFBEB', color: '#F59E0B' },
      error: { backgroundColor: '#FEF2F2', color: '#EF4444' },
      neutral: { backgroundColor: '#F3F4F6', color: '#6B7280' },
    };
    return variants[variant];
  };

  const getSizeStyles = () => {
    const sizes = {
      small: { paddingHorizontal: 8, paddingVertical: 4, fontSize: 12 },
      medium: { paddingHorizontal: 12, paddingVertical: 6, fontSize: 12 },
    };
    return sizes[size];
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <View style={[
      styles.badge,
      { backgroundColor: variantStyles.backgroundColor },
      { paddingHorizontal: sizeStyles.paddingHorizontal, paddingVertical: sizeStyles.paddingVertical },
      style
    ]}>
      <Text style={[
        styles.text,
        { color: variantStyles.color, fontSize: sizeStyles.fontSize },
        textStyle
      ]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: '500',
  },
});