import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Calendar, FileText, Users } from 'lucide-react-native';

import { Header } from '@/components/ui/Header';
import { UpdateCard } from '@/components/updates/UpdateCard';

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
      <Header 
        title="Updates" 
        rightElement={<Bell size={24} color="#4F46E5" />}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {updates.map((update) => (
          <UpdateCard key={update.id} update={update} />
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
});