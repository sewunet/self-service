import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Building, DollarSign, Calendar, Upload, User, Mail } from 'lucide-react-native';
import { FormInput } from '@/components/ui/FormInput';
import { ActionButton } from '@/components/ui/ActionButton';

export default function ApplyExpenseScreen() {
  const [company, setCompany] = useState('Nesscale ESS');
  const [costCenter, setCostCenter] = useState('Main - NE');
  const [expenseDate, setExpenseDate] = useState('2025-08-08');
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [approverName, setApproverName] = useState('Mukul Soni');
  const [approverEmail, setApproverEmail] = useState('mukul@gmail.com');
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  const handleAddExpense = () => {
    setShowExpenseModal(true);
  };

  const handleAttachments = () => {
    console.log('Attachments');
  };

  const handleCancel = () => {
    router.back();
  };

  const handleApply = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="#2563EB" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-gray-900">Apply Expense</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6">
        {/* Form Fields */}
        <FormInput
          label="Company"
          icon={Building}
          value={company}
          onChangeText={setCompany}
          isDropdown
          required
        />

        <FormInput
          label="Cost Center"
          icon={Building}
          value={costCenter}
          onChangeText={setCostCenter}
          isDropdown
          required
        />

        {/* Expenses Section */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold text-gray-900">Expenses</Text>
            <ActionButton
              title="ADD"
              variant="outline"
              onPress={handleAddExpense}
              className="px-4 py-2"
              textClassName="text-sm"
            />
          </View>
          
          <View className="bg-gray-100 rounded-xl p-8 items-center">
            <Text className="text-gray-400 text-base">No expenses added</Text>
          </View>
          
          <View className="flex-row justify-between items-center mt-4">
            <Text className="text-gray-500">Total :</Text>
            <Text className="text-lg font-semibold text-gray-900">0.0</Text>
          </View>
        </View>

        {/* Attachments */}
        <TouchableOpacity 
          className="flex-row items-center justify-center py-4 mb-6"
          onPress={handleAttachments}
        >
          <Upload size={20} color="#6B7280" className="mr-2" />
          <Text className="text-base text-gray-500">Attachments</Text>
        </TouchableOpacity>

        {/* Approver Details */}
        <FormInput
          label="Approver Name"
          value={approverName}
          onChangeText={setApproverName}
          placeholder="Approver Name"
        />

        <FormInput
          label="Approver"
          value={approverEmail}
          onChangeText={setApproverEmail}
          placeholder="Approver Email"
          keyboardType="email-address"
        />
      </ScrollView>

      {/* Bottom Action Buttons */}
      <View className="flex-row px-5 py-5 bg-white border-t border-gray-100 gap-3">
        <ActionButton
          title="Cancel"
          variant="outline"
          onPress={handleCancel}
          className="flex-1"
        />
        <ActionButton
          title="Apply"
          variant="primary"
          onPress={handleApply}
          className="flex-1"
        />
      </View>

      {/* Expense Modal */}
      {showExpenseModal && (
        <View className="absolute inset-0 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl p-6">
            <View className="w-12 h-1 bg-gray-300 rounded-full self-center mb-6" />
            <Text className="text-xl font-semibold text-gray-900 text-center mb-6">
              New Expense Item
            </Text>
            
            <FormInput
              label="Select day"
              icon={Calendar}
              value="2025-08-08"
              isDropdown
              required
            />

            <FormInput
              icon={DollarSign}
              placeholder="Select expense type"
              isDropdown
              required
            />

            <FormInput
              icon={DollarSign}
              placeholder="Amount"
              keyboardType="numeric"
              required
            />

            <FormInput
              placeholder="Reason"
              multiline
              numberOfLines={4}
              required
            />

            <View className="flex-row gap-3 mt-6">
              <ActionButton
                title="Cancel"
                variant="outline"
                onPress={() => setShowExpenseModal(false)}
                className="flex-1"
              />
              <ActionButton
                title="Add"
                variant="primary"
                onPress={() => setShowExpenseModal(false)}
                className="flex-1"
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}