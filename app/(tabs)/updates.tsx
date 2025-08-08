import { Header } from '@/components/Header';
import { PollCard } from '@/components/PollCard';
import { PostCard } from '@/components/PostCard';
import { Button } from '@/components/ui/Button';
import { TabBar } from '@/components/ui/TabBar';
import { ChartBar as BarChart3, Plus } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function UpdatesScreen() {
  const [activeTab, setActiveTab] = useState('Posts');

  const tabs = [
    { key: 'Posts', title: 'Posts' },
    { key: 'Events', title: 'Events' },
  ];

  const posts = [
    {
      id: 1,
      author: 'Bhavesh Maheshwari',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      timeAgo: '3 days ago',
      content: 'i am newly join morden security services.as a security, just i search how can i register my attendance, thanking you.',
      likes: 0,
      comments: 0,
    },
    {
      id: 2,
      author: 'Bhavesh Maheshwari',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      timeAgo: '14 days ago',
      content: 'jdj3jh',
      likes: 1,
      comments: 0,
    },
  ];

  const polls = [
    {
      id: 1,
      author: 'Ravi Dabhi',
      role: 'Manager',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      timeAgo: '5 months ago',
      question: 'What do you find most challenging when working on large-scale software projects?',
      options: [
        { text: 'Code maintainability and scalability', percentage: 0 },
        { text: 'Team coordination and communication', percentage: 0 },
        { text: 'Meeting deadlines and requirements', percentage: 0 },
        { text: 'Technical debt management', percentage: 0 },
      ],
    },
  ];

  const handleCreatePost = () => {
    console.log('Create post');
  };

  const handleCreatePoll = () => {
    console.log('Create poll');
  };

  const handlePostAction = (action: string, postId: number) => {
    console.log(`${action} on post ${postId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      
      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <View style={styles.createButtonsContainer}>
        <Button
          title="Create Post"
          variant="outline"
          icon={<Plus size={20} color="#2563EB" />}
          style={styles.createButton}
          onPress={handleCreatePost}
        />
        <Button
          title="Create Poll"
          variant="outline"
          icon={<BarChart3 size={20} color="#2563EB" />}
          style={styles.createButton}
          onPress={handleCreatePoll}
        />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {activeTab === 'Posts' && (
          <View style={styles.postsContainer}>
            {posts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post}
                onLike={() => handlePostAction('like', post.id)}
                onComment={() => handlePostAction('comment', post.id)}
                onMore={() => handlePostAction('more', post.id)}
              />
            ))}
            {polls.map((poll) => (
              <PollCard 
                key={poll.id} 
                poll={poll}
                onVote={(index) => console.log(`Voted option ${index} on poll ${poll.id}`)}
                onMore={() => handlePostAction('more', poll.id)}
              />
            ))}
          </View>
        )}
        
        {activeTab === 'Events' && (
          <View style={styles.eventsContainer}>
            <Text style={styles.emptyStateText}>No events to display</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  createButton: {
    flex: 1,
  },
  createButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 12,
  },
  scrollView: {
    flex: 1,
    marginTop: 16,
  },
  postsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  eventsContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: '#6B7280',
  },
});