import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  textStyle,
  icon,
}: ButtonProps) {
  const getVariantStyles = () => {
    const variants = {
      primary: {
        backgroundColor: '#2563EB',
        borderColor: '#2563EB',
        textColor: '#FFFFFF',
      },
      secondary: {
        backgroundColor: '#F3F4F6',
        borderColor: '#F3F4F6',
        textColor: '#374151',
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: '#D1D5DB',
        textColor: '#374151',
      },
      ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        textColor: '#2563EB',
      },
    };
    return variants[variant];
  };

  const getSizeStyles = () => {
    const sizes = {
      small: { paddingVertical: 8, paddingHorizontal: 12, fontSize: 14 },
      medium: { paddingVertical: 12, paddingHorizontal: 16, fontSize: 16 },
      large: { paddingVertical: 16, paddingHorizontal: 20, fontSize: 18 },
    };
    return sizes[size];
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: variantStyles.backgroundColor,
          borderColor: variantStyles.borderColor,
          paddingVertical: sizeStyles.paddingVertical,
          paddingHorizontal: sizeStyles.paddingHorizontal,
        },
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon}
      <Text
        style={[
          styles.text,
          { color: variantStyles.textColor, fontSize: sizeStyles.fontSize },
          disabled && styles.disabledText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
  },
  text: {
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#9CA3AF',
  },
});