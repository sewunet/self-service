import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  ChevronRight, 
  User, 
  GraduationCap, 
  CreditCard, 
  Fingerprint, 
  Lock, 
  Globe, 
  Palette, 
  FileText, 
  Building,
  LogOut,
  AlertCircle,
  X
} from 'lucide-react-native';

const profileSections = [
  {
    title: 'Personal Details',
    icon: User,
    color: '#4F46E5'
  },
  {
    title: 'Education Details',
    icon: GraduationCap,
    color: '#059669'
  },
  {
    title: 'Bank Details',
    icon: CreditCard,
    color: '#DC2626'
  }
];

const settingsSections = [
  {
    title: 'Enable Fingerprint',
    icon: Fingerprint,
    color: '#6B7280',
    isToggle: true
  },
  {
    title: 'Change Password',
    icon: Lock,
    color: '#4F46E5'
  },
  {
    title: 'Select Language',
    icon: Globe,
    color: '#059669'
  },
  {
    title: 'Appearance',
    icon: Palette,
    color: '#7C3AED'
  }
];

const documentSections = [
  {
    title: 'Documents',
    icon: FileText,
    color: '#4F46E5'
  },
  {
    title: 'Company Policy',
    icon: Building,
    color: '#059669'
  }
];

export default function ProfileScreen() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const renderSection = (section: any, index: number) => (
    <TouchableOpacity key={index} style={styles.sectionItem}>
      <View style={styles.sectionLeft}>
        <View style={[styles.sectionIcon, { backgroundColor: `${section.color}15` }]}>
          <section.icon size={20} color={section.color} />
        </View>
        <Text style={styles.sectionTitle}>{section.title}</Text>
      </View>
      <ChevronRight size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Sections */}
        <View style={styles.section}>
          {profileSections.map(renderSection)}
        </View>

        {/* Settings Sections */}
        <View style={styles.section}>
          {settingsSections.map(renderSection)}
        </View>

        {/* Document Sections */}
        <View style={styles.section}>
          {documentSections.map(renderSection)}
        </View>

        {/* Logout Section */}
        <View style={styles.section}>
          <TouchableOpacity 
            style={styles.logoutItem}
            onPress={() => setShowLogoutModal(true)}
          >
            <View style={styles.sectionLeft}>
              <View style={[styles.sectionIcon, { backgroundColor: '#FEE2E2' }]}>
                <LogOut size={20} color="#DC2626" />
              </View>
              <Text style={styles.logoutTitle}>Logout</Text>
            </View>
            <ChevronRight size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Version */}
        <Text style={styles.version}>v2.1.29-0 (150)</Text>
      </ScrollView>

      {/* Logout Confirmation Modal */}
      <Modal
        visible={showLogoutModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIcon}>
              <AlertCircle size={48} color="#DC2626" />
            </View>
            
            <Text style={styles.modalTitle}>Logout</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to logout from this device?
            </Text>
            
            <View style={styles.modalActions}>
              <TouchableOpacity 
                style={styles.logoutButton}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={styles.logoutButtonText}>Yes, Logout</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
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
    paddingTop: 20,
  },
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
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  logoutTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#DC2626',
  },
  version: {
    textAlign: 'center',
    fontSize: 14,
    color: '#4F46E5',
    marginBottom: 100,
    fontWeight: '500',
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
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  modalIcon: {
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  modalActions: {
    width: '100%',
    gap: 12,
  },
  logoutButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  cancelButton: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
});