import React from 'react';
import { Image, View, StyleSheet, ViewStyle } from 'react-native';

interface AvatarProps {
  source: string;
  size?: number;
  style?: ViewStyle;
}

export function Avatar({ source, size = 40, style }: AvatarProps) {
  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Image 
        source={{ uri: source }} 
        style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
});