import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface InputProps extends TextInputProps {
  label?: string;
  icon?: LucideIcon;
  rightIcon?: React.ReactNode;
  error?: string;
  containerStyle?: ViewStyle;
}

export function Input({ 
  label, 
  icon: Icon, 
  rightIcon, 
  error, 
  containerStyle, 
  style,
  ...props 
}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputWrapper, error && styles.errorBorder]}>
        {Icon && <Icon size={20} color="#9CA3AF" style={styles.leftIcon} />}
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor="#9CA3AF"
          {...props}
        />
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 8,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  errorBorder: {
    borderColor: '#DC2626',
  },
  leftIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  rightIcon: {
    marginLeft: 12,
  },
  errorText: {
    fontSize: 12,
    color: '#DC2626',
    marginTop: 4,
    marginLeft: 4,
  },
});