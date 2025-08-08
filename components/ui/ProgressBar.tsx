import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressSegment {
  value: number;
  color: string;
}

interface ProgressBarProps {
  segments: ProgressSegment[];
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
}

export function ProgressBar({ 
  segments, 
  height = 8, 
  borderRadius = 4,
  backgroundColor = '#E5E7EB' 
}: ProgressBarProps) {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);

  return (
    <View style={[
      styles.container,
      { height, borderRadius, backgroundColor }
    ]}>
      {segments.map((segment, index) => (
        <View
          key={index}
          style={[
            styles.segment,
            {
              flex: segment.value,
              backgroundColor: segment.color,
              height: '100%',
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  segment: {
    height: '100%',
  },
});