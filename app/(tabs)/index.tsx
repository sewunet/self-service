import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Plus, 
  MoreHorizontal, 
  ThumbsUp, 
  MessageCircle, 
  Share,
  DollarSign,
  Calendar,
  ClipboardList,
  UserCheck,
  CheckSquare,
  CreditCard,
  Coins,
  X
} from 'lucide-react-native';

interface Post {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
}

const mockPosts: Post[] = [
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

const quickActions = [
  { id: 'expense', title: 'Apply Expense', icon: DollarSign, color: '#4F46E5' },
  { id: 'leave', title: 'Apply Leave', icon: Calendar, color: '#059669' },
  { id: 'order', title: 'Create Order', icon: ClipboardList, color: '#7C3AED' },
  { id: 'visit', title: 'Create Visit', icon: UserCheck, color: '#0891B2' },
  { id: 'task', title: 'Create Task', icon: CheckSquare, color: '#DC2626' },
  { id: 'payment', title: 'Payment Entry', icon: CreditCard, color: '#EA580C' },
  { id: 'petty', title: 'Petty Expense', icon: Coins, color: '#16A34A' }
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Posts');
  const [showQuickActions, setShowQuickActions] = useState(false);

  const renderPost = (post: Post) => (
    <View key={post.id} style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.authorInfo}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.authorName}>{post.author}</Text>
            <Text style={styles.timeAgo}>{post.timeAgo}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <MoreHorizontal size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.postContent}>{post.content}</Text>
      
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <ThumbsUp size={18} color="#6B7280" />
          <Text style={styles.actionText}>{post.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle size={18} color="#6B7280" />
          <Text style={styles.actionText}>{post.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Share size={18} color="#6B7280" />
          <Text style={styles.actionText}>{post.shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Tabs */}
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Posts' && styles.activeTab]}
            onPress={() => setActiveTab('Posts')}
          >
            <Text style={[styles.tabText, activeTab === 'Posts' && styles.activeTabText]}>
              Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Events' && styles.activeTab]}
            onPress={() => setActiveTab('Events')}
          >
            <Text style={[styles.tabText, activeTab === 'Events' && styles.activeTabText]}>
              Events
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <TouchableOpacity style={styles.createButton}>
          <Plus size={20} color="#4F46E5" />
          <Text style={styles.createButtonText}>Create Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButton}>
          <ClipboardList size={20} color="#4F46E5" />
          <Text style={styles.createButtonText}>Create Poll</Text>
        </TouchableOpacity>
      </View>

      {/* Posts Feed */}
      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
        {mockPosts.map(renderPost)}
        
        {/* Poll Example */}
        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.authorInfo}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150' }} 
                style={styles.avatar} 
              />
              <View>
                <Text style={styles.authorName}>Ravi</Text>
                <Text style={styles.timeAgo}>5 months ago</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <MoreHorizontal size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.pollQuestion}>What do you think about when working on large projects?</Text>
          
          <View style={styles.pollOption}>
            <View style={styles.pollOptionContent}>
              <View style={styles.radioButton} />
              <Text style={styles.pollOptionText}>Code maintainability and scalability</Text>
            </View>
            <Text style={styles.pollPercentage}>0.00 %</Text>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => setShowQuickActions(true)}
      >
        <Plus size={24} color="white" />
      </TouchableOpacity>

      {/* Quick Actions Modal */}
      <Modal
        visible={showQuickActions}
        transparent
        animationType="fade"
        onRequestClose={() => setShowQuickActions(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setShowQuickActions(false)}
            >
              <X size={24} color="#6B7280" />
            </TouchableOpacity>
            
            {quickActions.map((action) => (
              <TouchableOpacity key={action.id} style={styles.actionItem}>
                <View style={[styles.actionIcon, { backgroundColor: `${action.color}15` }]}>
                  <action.icon size={24} color={action.color} />
                </View>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionArrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
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
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#4F46E5',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#4F46E5',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 8,
  },
  createButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4F46E5',
  },
  feed: {
    flex: 1,
    paddingHorizontal: 20,
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  timeAgo: {
    fontSize: 14,
    color: '#6B7280',
  },
  moreButton: {
    padding: 4,
  },
  postContent: {
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
    marginBottom: 16,
  },
  postActions: {
    flexDirection: 'row',
    gap: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    fontSize: 14,
    color: '#6B7280',
  },
  pollQuestion: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 16,
  },
  pollOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    marginBottom: 8,
  },
  pollOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#D1D5DB',
  },
  pollOptionText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  pollPercentage: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  actionArrow: {
    fontSize: 20,
    color: '#9CA3AF',
  },
});