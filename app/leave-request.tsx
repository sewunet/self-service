import { router } from 'expo-router';
import { Calendar, ChevronLeft, Mail, User } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="#2563EB" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-gray-900">New Leave Request</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" showsVerticalScrollIndicator={false}>
        {/* Date Inputs */}
        <View className="flex-row gap-3 mb-5">
          <Input
            label="Start Day*"
            icon={Calendar}
            value={startDate}
            onChangeText={setStartDate}
            placeholder="2025-08-08"
            containerStyle="flex-1"
          />
          
          <Input
            label="End Day*"
            icon={Calendar}
            value={endDate}
            onChangeText={setEndDate}
            placeholder="2025-08-08"
            containerStyle="flex-1"
          />
        </View>

        {/* Leave Type Dropdown */}
        <Input
          icon={Calendar}
          placeholder="Select leave type*"
          value={leaveType}
          onChangeText={setLeaveType}
        />

        {/* Half Day Toggle */}
        <TouchableOpacity 
          className="py-4 mb-5"
          onPress={() => setIsHalfDay(!isHalfDay)}
        >
          <Text className="text-base text-gray-400">Add half day</Text>
        </TouchableOpacity>

        {/* Reason Input */}
        <Input
          value={reason}
          onChangeText={setReason}
          placeholder="Type reason here...*"
          multiline
          numberOfLines={4}
          containerStyle="mb-5"
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
      <View className="flex-row px-5 py-5 bg-white border-t border-gray-100 gap-3">
        <Button
          title="Cancel"
          variant="secondary"
          onPress={handleCancel}
          className="flex-1"
        />
        <Button
          title="Apply"
          variant="primary"
          onPress={handleSubmit}
          className="flex-1"
        />
      </View>
    </SafeAreaView>
  );
}