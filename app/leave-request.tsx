import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ChevronLeft, Calendar, ChevronDown, User, Mail } from 'lucide-react-native';

export default function LeaveRequestScreen() {
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('2025-08-08');
  const [leaveType, setLeaveType] = useState('');
  const [isHalfDay, setIsHalfDay] = useState(false);
  const [reason, setReason] = useState('');
  const [approverName, setApproverName] = useState('Mukul Soni');
  const [approverEmail, setApproverEmail] = useState('mukul@gmail.com');

  const handleSubmit = () => {
    // Handle form submission
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color="#4F46E5" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Leave Request</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Date Inputs */}
        <View style={styles.dateRow}>
          <View style={styles.dateContainer}>
            <Text style={styles.inputLabel}>Start Day*</Text>
            <View style={styles.dateInputWrapper}>
              <Calendar size={20} color="#9CA3AF" />
              <TextInput
                style={styles.dateInput}
                value={startDate}
                onChangeText={setStartDate}
                placeholder="2025-08-08"
              />
            </View>
          </View>
          
          <View style={styles.dateContainer}>
            <Text style={styles.inputLabel}>End Day*</Text>
            <View style={styles.dateInputWrapper}>
              <Calendar size={20} color="#9CA3AF" />
              <TextInput
                style={styles.dateInput}
                value={endDate}
                onChangeText={setEndDate}
                placeholder="2025-08-08"
              />
            </View>
          </View>
        </View>

        {/* Leave Type Dropdown */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.dropdownWrapper}>
            <View style={styles.dropdownContent}>
              <Calendar size={20} color="#9CA3AF" />
              <Text style={styles.dropdownPlaceholder}>Select leave type*</Text>
            </View>
            <ChevronDown size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Half Day Toggle */}
        <TouchableOpacity 
          style={styles.halfDayContainer}
          onPress={() => setIsHalfDay(!isHalfDay)}
        >
          <Text style={styles.halfDayText}>Add half day</Text>
        </TouchableOpacity>

        {/* Reason Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.reasonInput}
            value={reason}
            onChangeText={setReason}
            placeholder="Type reason here...*"
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Approver Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Approver Name*</Text>
          <View style={styles.inputWrapper}>
            <User size={20} color="#9CA3AF" />
            <TextInput
              style={styles.input}
              value={approverName}
              onChangeText={setApproverName}
              placeholder="Approver Name"
            />
          </View>
        </View>

        {/* Approver Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Approver*</Text>
          <View style={styles.inputWrapper}>
            <Mail size={20} color="#9CA3AF" />
            <TextInput
              style={styles.input}
              value={approverEmail}
              onChangeText={setApproverEmail}
              placeholder="Approver Email"
              keyboardType="email-address"
            />
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={handleSubmit}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  placeholder: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  dateContainer: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  dateInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    gap: 12,
  },
  dateInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  inputContainer: {
    marginBottom: 20,
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
  reasonInput: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    fontSize: 16,
    color: '#111827',
    minHeight: 120,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    gap: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  eyeIcon: {
    padding: 4,
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
  cancelButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  applyButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});