import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { 
  User, 
  GraduationCap, 
  CreditCard, 
  Fingerprint, 
  Lock, 
  Globe, 
  Palette, 
  FileText, 
  Building,
  LogOut
} from 'lucide-react-native';

import { Header } from '@/components/ui/Header';
import { ProfileSection } from '@/components/profile/ProfileSection';
import { LogoutModal } from '@/components/actions/LogoutModal';

const profileSections = [
  {
    title: 'Personal Details',
    icon: User,
    color: '#4F46E5',
    onPress: () => console.log('Personal Details')
  },
  {
    title: 'Education Details',
    icon: GraduationCap,
    color: '#059669',
    onPress: () => console.log('Education Details')
  },
  {
    title: 'Bank Details',
    icon: CreditCard,
    color: '#DC2626',
    onPress: () => console.log('Bank Details')
  }
];

const settingsSections = [
  {
    title: 'Enable Fingerprint',
    icon: Fingerprint,
    color: '#6B7280',
    onPress: () => console.log('Enable Fingerprint')
  },
  {
    title: 'Change Password',
    icon: Lock,
    color: '#4F46E5',
    onPress: () => console.log('Change Password')
  },
  {
    title: 'Select Language',
    icon: Globe,
    color: '#059669',
    onPress: () => console.log('Select Language')
  },
  {
    title: 'Appearance',
    icon: Palette,
    color: '#7C3AED',
    onPress: () => console.log('Appearance')
  }
];

const documentSections = [
  {
    title: 'Documents',
    icon: FileText,
    color: '#4F46E5',
    onPress: () => console.log('Documents')
  },
  {
    title: 'Company Policy',
    icon: Building,
    color: '#059669',
    onPress: () => console.log('Company Policy')
  }
];

export default function ProfileScreen() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const logoutSections = [
    {
      title: 'Logout',
      icon: LogOut,
      color: '#DC2626',
      onPress: () => setShowLogoutModal(true)
    }
  ];

  const handleLogout = () => {
    setShowLogoutModal(false);
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Profile" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ProfileSection items={profileSections} />
        <ProfileSection items={settingsSections} />
        <ProfileSection items={documentSections} />
        <ProfileSection items={logoutSections} />
        
        <Text style={styles.version}>v2.1.29-0 (150)</Text>
      </ScrollView>

      <LogoutModal
        visible={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
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
    paddingTop: 20,
  },
  version: {
    textAlign: 'center',
    fontSize: 14,
    color: '#4F46E5',
    marginBottom: 100,
    fontWeight: '500',
  },
});