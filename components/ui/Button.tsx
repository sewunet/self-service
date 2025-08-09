import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  icon?: React.ReactNode;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className,
  textClassName,
  icon,
}: ButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 border-blue-500';
      case 'secondary':
        return 'bg-gray-100 border-gray-200';
      case 'outline':
        return 'bg-white border-gray-200';
      case 'ghost':
        return 'bg-transparent border-transparent';
      default:
        return 'bg-blue-500 border-blue-500';
    }
  };

  const getTextClasses = () => {
    switch (variant) {
      case 'primary':
        return 'text-white';
      case 'secondary':
        return 'text-gray-700';
      case 'outline':
        return 'text-gray-700';
      case 'ghost':
        return 'text-blue-500';
      default:
        return 'text-white';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'py-2 px-3';
      case 'medium':
        return 'py-3 px-4';
      case 'large':
        return 'py-4 px-6';
      default:
        return 'py-3 px-4';
    }
  };

  return (
    <TouchableOpacity
      className={`flex-row items-center justify-center rounded-xl border ${getVariantClasses()} ${getSizeClasses()} ${
        disabled ? 'opacity-50' : ''
      } ${className}`}
      onPress={onPress}
      disabled={disabled}
    >
      {icon}
      <Text className={`text-base font-medium font-inter ${getTextClasses()} ${textClassName}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}