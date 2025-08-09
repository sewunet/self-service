import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Video as LucideIcon, Eye, EyeOff } from 'lucide-react-native';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  icon?: LucideIcon;
  rightIcon?: React.ReactNode;
  error?: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  className?: string;
  containerStyle?: string;
}

export function Input({
  label,
  placeholder,
  value,
  onChangeText,
  icon: Icon,
  rightIcon,
  error,
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
  keyboardType = 'default',
  className,
  containerStyle,
}: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = secureTextEntry;

  return (
    <View className={`mb-5 ${containerStyle}`}>
      {label && (
        <Text className="text-sm text-gray-400 mb-2 ml-1">
          {label}
        </Text>
      )}
      <View className={`flex-row items-center border border-gray-200 rounded-xl px-4 py-4 bg-white ${
        error ? 'border-red-500' : ''
      } ${multiline ? 'items-start' : 'items-center'} ${className}`}>
        {Icon && (
          <Icon size={20} color="#9CA3AF" className="mr-3" />
        )}
        <TextInput
          className={`flex-1 text-base text-gray-900 font-inter ${
            multiline ? 'min-h-[100px]' : ''
          }`}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !showPassword}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
          textAlignVertical={multiline ? 'top' : 'center'}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="ml-3">
            {showPassword ? (
              <EyeOff size={20} color="#9CA3AF" />
            ) : (
              <Eye size={20} color="#9CA3AF" />
            )}
          </TouchableOpacity>
        )}
        {rightIcon && <View className="ml-3">{rightIcon}</View>}
      </View>
      {error && (
        <Text className="text-xs text-red-500 mt-1 ml-1">{error}</Text>
      )}
    </View>
  );
}