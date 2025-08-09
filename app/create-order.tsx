import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Building, Warehouse, User, Calendar, Plus, QrCode, Upload } from 'lucide-react-native';
import { FormInput } from '@/components/ui/FormInput';
import { ActionButton } from '@/components/ui/ActionButton';

export default function CreateOrderScreen() {
  const [company, setCompany] = useState('Nesscale ESS');
  const [costCenter, setCostCenter] = useState('Main - NE');
  const [warehouse, setWarehouse] = useState('');
  const [customer, setCustomer] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('2025-08-08');

  const handleAddItem = () => {
    console.log('Add Item');
  };

  const handleScanItem = () => {
    console.log('Scan Item');
  };

  const handleAttachments = () => {
    console.log('Attachments');
  };

  const handleCancel = () => {
    router.back();
  };

  const handleCreate = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="#2563EB" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-gray-900">Create Order</Text>
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
        />

        <FormInput
          icon={Warehouse}
          placeholder="Warehouse"
          value={warehouse}
          onChangeText={setWarehouse}
          isDropdown
        />

        <FormInput
          icon={User}
          placeholder="Select Customer"
          value={customer}
          onChangeText={setCustomer}
          isDropdown
        />

        <FormInput
          label="Select Delivery day"
          icon={Calendar}
          value={deliveryDate}
          onChangeText={setDeliveryDate}
          isDropdown
          required
        />

        {/* Action Buttons */}
        <View className="flex-row gap-3 mb-8">
          <ActionButton
            title="Add Item"
            variant="outline"
            icon={Plus}
            onPress={handleAddItem}
            className="flex-1"
          />
          <ActionButton
            title="Scan Item"
            variant="outline"
            icon={QrCode}
            onPress={handleScanItem}
            className="flex-1"
          />
        </View>

        {/* Attachments */}
        <TouchableOpacity 
          className="flex-row items-center justify-center py-4 mb-8"
          onPress={handleAttachments}
        >
          <Upload size={20} color="#6B7280" className="mr-2" />
          <Text className="text-base text-gray-500">Attachments</Text>
        </TouchableOpacity>
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
          title="Create"
          variant="primary"
          onPress={handleCreate}
          className="flex-1"
        />
      </View>
    </SafeAreaView>
  );
}