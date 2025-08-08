import { Card } from '@/components/ui/Card';
import { Video as lucideIcon } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface ActionCardProps {
  icon: typeof lucideIcon;
  title: string;
  color: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export function ActionCard({ icon: Icon, title, color, onPress, style }: ActionCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Card style={styles.card} padding={16}>
        <View style={[styles.iconContainer, { backgroundColor: `${color}20` }]}>
          <Icon size={24} color={color} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
  },
});