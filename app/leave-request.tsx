import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Calendar, ChevronDown, User, Mail } from 'lucide-react-native';

import { Header } from '@/components/ui/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function LeaveRequestScreen() {
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('2025-08-08');
  const [leaveType, setLeaveType] = useState('');
  const [isHalfDay, setIsHalfDay] = useState(false);
  const [reason, setReason] = useState('');
  const [approverName, setApproverName] = useState('Mukul Soni');
  const [approverEmail, setApproverEmail] = useState('mukul@gmail.com');

  const handleSubmit = () => {
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="New Leave Request" 
        showBackButton 
        onBackPress={() => router.back()}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Date Inputs */}
        <View style={styles.dateRow}>
          <Input
            label="Start Day*"
            icon={Calendar}
            value={startDate}
            onChangeText={setStartDate}
            placeholder="2025-08-08"
            containerStyle={styles.dateContainer}
          />
          
          <Input
            label="End Day*"
            icon={Calendar}
            value={endDate}
            onChangeText={setEndDate}
            placeholder="2025-08-08"
            containerStyle={styles.dateContainer}
          />
        </View>

        {/* Leave Type Dropdown */}
        <TouchableOpacity style={styles.dropdownWrapper}>
          <View style={styles.dropdownContent}>
            <Calendar size={20} color="#9CA3AF" />
            <Text style={styles.dropdownPlaceholder}>Select leave type*</Text>
          </View>
          <ChevronDown size={20} color="#9CA3AF" />
        </TouchableOpacity>

        {/* Half Day Toggle */}
        <TouchableOpacity 
          style={styles.halfDayContainer}
          onPress={() => setIsHalfDay(!isHalfDay)}
        >
          <Text style={styles.halfDayText}>Add half day</Text>
        </TouchableOpacity>

        {/* Reason Input */}
        <Input
          value={reason}
          onChangeText={setReason}
          placeholder="Type reason here...*"
          multiline
          numberOfLines={4}
          style={styles.reasonInput}
          containerStyle={styles.reasonContainer}
        />

        {/* Approver Inputs */}
        <Input
          label="Approver Name*"
          icon={User}
          value={approverName}
          onChangeText={setApproverName}
          placeholder="Approver Name"
        />

        <Input
          label="Approver*"
          icon={Mail}
          value={approverEmail}
          onChangeText={setApproverEmail}
          placeholder="Approver Email"
          keyboardType="email-address"
        />
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <Button
          title="Cancel"
          variant="secondary"
          onPress={handleCancel}
          style={styles.actionButton}
        />
        <Button
          title="Apply"
          variant="primary"
          onPress={handleSubmit}
          style={styles.actionButton}
        />
      </View>
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
    paddingTop: 24,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 12,
  },
  dateContainer: {
    flex: 1,
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  dropdownContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dropdownPlaceholder: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  halfDayContainer: {
    paddingVertical: 16,
    marginBottom: 20,
  },
  halfDayText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  reasonContainer: {
    marginBottom: 20,
  },
  reasonInput: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  actionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 12,
  },
  actionButton: {
    flex: 1,
  },
});