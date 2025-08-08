import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Video as LucideIcon } from 'lucide-react-native';

interface ProfileSectionItem {
  title: string;
  icon: LucideIcon;
  color: string;
  onPress?: () => void;
}

interface ProfileSectionProps {
  items: ProfileSectionItem[];
}

export function ProfileSection({ items }: ProfileSectionProps) {
  return (
    <View style={styles.section}>
      {items.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={[styles.item, index < items.length - 1 && styles.itemBorder]}
          onPress={item.onPress}
        >
          <View style={styles.left}>
            <View style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}>
              <item.icon size={20} color={item.color} />
            </View>
            <Text style={[styles.title, item.title === 'Logout' && styles.logoutTitle]}>
              {item.title}
            </Text>
          </View>
          <ChevronRight size={20} color="#9CA3AF" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  logoutTitle: {
    color: '#DC2626',
  },
});