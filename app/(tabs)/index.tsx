import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Plus, ClipboardList, DollarSign, Calendar, UserCheck, SquareCheck as CheckSquare, CreditCard, Coins } from 'lucide-react-native';

import { TabSelector } from '@/components/ui/TabSelector';
import { Button } from '@/components/ui/Button';
import { FloatingActionButton } from '@/components/ui/FloatingActionButton';
import { PostCard } from '@/components/feed/PostCard';
import { PollCard } from '@/components/feed/PollCard';
import { QuickActionsModal } from '@/components/actions/QuickActionsModal';

const tabs = [
  { id: 'Posts', title: 'Posts' },
  { id: 'Events', title: 'Events' }
];

const mockPosts = [
  {
    id: '1',
    author: 'Bhavesh Maheshwari',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    timeAgo: '3 days ago',
    content: 'i am newly join morden security services.as a security, just i search how can i register my attendance. thanking you.',
    likes: 0,
    comments: 0,
    shares: 0
  },
  {
    id: '2',
    author: 'Bhavesh Maheshwari',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    timeAgo: '14 days ago',
    content: 'jdj3jh',
    likes: 1,
    comments: 0,
    shares: 0
  }
];

const mockPoll = {
  id: '3',
  author: 'Ravi',
  avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
  timeAgo: '5 months ago',
  question: 'What do you think about when working on large projects?',
  options: [
    {
      id: '1',
      text: 'Code maintainability and scalability',
      percentage: 0.00
    }
  ]
};

const quickActions = [
  { 
    id: 'expense', 
    title: 'Apply Expense', 
    icon: DollarSign, 
    color: '#4F46E5',
    onPress: () => console.log('Apply Expense')
  },
  { 
    id: 'leave', 
    title: 'Apply Leave', 
    icon: Calendar, 
    color: '#059669',
    onPress: () => router.push('/leave-request')
  },
  { 
    id: 'order', 
    title: 'Create Order', 
    icon: ClipboardList, 
    color: '#7C3AED',
    onPress: () => console.log('Create Order')
  },
  { 
    id: 'visit', 
    title: 'Create Visit', 
    icon: UserCheck, 
    color: '#0891B2',
    onPress: () => console.log('Create Visit')
  },
  { 
    id: 'task', 
    title: 'Create Task', 
    icon: CheckSquare, 
    color: '#DC2626',
    onPress: () => console.log('Create Task')
  },
  { 
    id: 'payment', 
    title: 'Payment Entry', 
    icon: CreditCard, 
    color: '#EA580C',
    onPress: () => console.log('Payment Entry')
  },
  { 
    id: 'petty', 
    title: 'Petty Expense', 
    icon: Coins, 
    color: '#16A34A',
    onPress: () => console.log('Petty Expense')
  }
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Posts');
  const [showQuickActions, setShowQuickActions] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Tabs */}
      <View style={styles.header}>
        <TabSelector
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <Button
          title="Create Post"
          variant="secondary"
          style={styles.createButton}
          onPress={() => console.log('Create Post')}
        />
        <Button
          title="Create Poll"
          variant="secondary"
          style={styles.createButton}
          onPress={() => console.log('Create Poll')}
        />
      </View>

      {/* Posts Feed */}
      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <PollCard poll={mockPoll} />
      </ScrollView>

      {/* Floating Action Button */}
      <FloatingActionButton
        icon={Plus}
        onPress={() => setShowQuickActions(true)}
      />

      {/* Quick Actions Modal */}
      <QuickActionsModal
        visible={showQuickActions}
        onClose={() => setShowQuickActions(false)}
        actions={quickActions}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  quickActionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  createButton: {
    flex: 1,
  },
  feed: {
    flex: 1,
    paddingHorizontal: 20,
  },
});