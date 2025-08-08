import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

interface AvatarProps {
  source?: string;
  size?: number;
  fallback?: string;
  style?: any;
}

export function Avatar({ source, size = 40, fallback, style }: AvatarProps) {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  if (source) {
    return (
      <Image
        source={{ uri: source }}
        style={[avatarStyle, style]}
      />
    );
  }

  return (
    <View style={[styles.fallback, avatarStyle, style]}>
      <Text style={[styles.fallbackText, { fontSize: size * 0.4 }]}>
        {fallback || '?'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fallback: {
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackText: {
    color: '#6B7280',
    fontWeight: '600',
  },
});