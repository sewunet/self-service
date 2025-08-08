import { LogoutModal } from '@/components/actions/LogoutModal';
import { Header } from '@/components/Header';
import { ProfileSection } from '@/components/profile/ProfileSection';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import {
  Bell,
  Building,
  CreditCard,
  FileText,
  Fingerprint,
  Globe,
  GraduationCap,
  Lock,
  LogOut,
  Palette,
  Settings,
  Shield,
  User
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
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
  const profileOptions = [
    { icon: Settings, title: 'Settings', color: '#6B7280', onPress: () => console.log('Settings') },
    { icon: Bell, title: 'Notifications', color: '#F59E0B', onPress: () => console.log('Notifications') },
    { icon: Shield, title: 'Privacy & Security', color: '#10B981', onPress: () => console.log('Privacy') },
    { icon: LogOut, title: 'Sign Out', color: '#EF4444', onPress: () => console.log('Sign Out') },
  ];
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
      <Header />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Card style={styles.profileHeader}>
          <Avatar
            source="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
            size={80}
            fallback="BM"
          />
          <Text style={styles.name}>Bhavesh Maheshwari</Text>
          <Text style={styles.role}>Security Officer</Text>
          <Text style={styles.employeeId}>EMP-2024-001</Text>
        </Card>

        <ProfileSection items={profileSections} />
        <ProfileSection items={settingsSections} />
        <ProfileSection items={documentSections} />
        <ProfileSection items={logoutSections} />
        
        <Text style={styles.container}>v2.1.29-0 (150)</Text>
        
      <LogoutModal
        visible={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    marginHorizontal: 16,
    marginTop: 16,
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 4,
  },
  employeeId: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});