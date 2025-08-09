import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, DollarSign, Building, Paperclip, Calendar, Bookmark } from 'lucide-react-native';
import { StepIndicator } from '@/components/ui/StepIndicator';
import { FormInput } from '@/components/ui/FormInput';
import { ActionButton } from '@/components/ui/ActionButton';

export default function PaymentEntryScreen() {
  const [accountPaidFrom, setAccountPaidFrom] = useState('Cash - NE');
  const [accountPaidTo, setAccountPaidTo] = useState('');
  const [paidAmount, setPaidAmount] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [referenceDate, setReferenceDate] = useState('');
  const [status, setStatus] = useState('Draft');

  const handlePrevious = () => {
    router.back();
  };

  const handleDraft = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="#2563EB" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-gray-900">New Payment Entry</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6">
        {/* Step Indicator */}
        <StepIndicator currentStep={1} totalSteps={2} />

        {/* Amount Display */}
        <View className="items-center mb-8">
          <Text className="text-gray-400 text-base">ravi barmen</Text>
          <Text className="text-2xl font-bold text-gray-900">0.0</Text>
        </View>

        {/* Form Fields */}
        <FormInput
          label="Account Paid From"
          icon={DollarSign}
          value={accountPaidFrom}
          onChangeText={setAccountPaidFrom}
          isDropdown
          required
        />

        <FormInput
          label="Account Paid To"
          icon={DollarSign}
          placeholder="Account Paid To"
          value={accountPaidTo}
          onChangeText={setAccountPaidTo}
          isDropdown
          required
        />

        <FormInput
          icon={DollarSign}
          placeholder="Paid Amount"
          value={paidAmount}
          onChangeText={setPaidAmount}
          keyboardType="numeric"
          required
        />

        {/* Summary */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-base font-medium text-gray-900">Total Allocated</Text>
            <Text className="text-base font-semibold text-blue-500">0.0</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-base font-medium text-gray-900">Total Unallocated</Text>
            <Text className="text-base font-semibold text-red-500">0.0</Text>
          </View>
        </View>

        <FormInput
          icon={Paperclip}
          placeholder="Reference no."
          value={referenceNo}
          onChangeText={setReferenceNo}
        />

        <FormInput
          icon={Calendar}
          placeholder="Reference Date"
          value={referenceDate}
          onChangeText={setReferenceDate}
          isDropdown
        />

        <FormInput
          label="Status"
          icon={Bookmark}
          value={status}
          onChangeText={setStatus}
          isDropdown
          required
        />
      </ScrollView>

      {/* Action Buttons */}
      <View className="flex-row px-5 py-5 bg-white border-t border-gray-100 gap-3">
        <ActionButton
          title="Previous"
          variant="outline"
          onPress={handlePrevious}
          className="flex-1"
        />
        <ActionButton
          title="Draft"
          variant="primary"
          onPress={handleDraft}
          className="flex-1"
        />
      </View>
    </SafeAreaView>
  );
}