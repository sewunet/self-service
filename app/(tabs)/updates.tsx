import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Calendar, FileText, Users } from 'lucide-react-native';

const updates = [
  {
    id: '1',
    type: 'announcement',
    title: 'New Company Policy Update',
    description: 'Updated guidelines for remote work and flexible hours',
    time: '2 hours ago',
    icon: FileText,
    color: '#4F46E5'
  },
  {
    id: '2',
    type: 'event',
    title: 'Team Building Event',
    description: 'Join us for the quarterly team building activity',
    time: '1 day ago',
    icon: Users,
    color: '#059669'
  },
  {
    id: '3',
    type: 'reminder',
    title: 'Monthly Report Due',
    description: 'Submit your monthly progress report by Friday',
    time: '3 days ago',
    icon: Calendar,
    color: '#DC2626'
  }
];

export default function UpdatesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Updates</Text>
        <Bell size={24} color="#4F46E5" />
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {updates.map((update) => (
          <View key={update.id} style={styles.updateCard}>
            <View style={[styles.iconContainer, { backgroundColor: `${update.color}15` }]}>
              <update.icon size={24} color={update.color} />
            </View>
            <View style={styles.updateContent}>
              <Text style={styles.updateTitle}>{update.title}</Text>
              <Text style={styles.updateDescription}>{update.description}</Text>
              <Text style={styles.updateTime}>{update.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  updateCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  updateContent: {
    flex: 1,
  },
  updateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  updateDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 8,
  },
  updateTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});