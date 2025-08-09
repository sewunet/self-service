import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

export default function TeamExpensesScreen() {
  const [activeTab, setActiveTab] = useState('Team Expenses');
  const [showExpenseDetails, setShowExpenseDetails] = useState(false);
  const [showUpdateStatus, setShowUpdateStatus] = useState(false);

  const tabs = ['Team Leaves', 'Team Expenses'];

  const expenses = [
    {
      id: 'HR-EXP-2025-00319',
      date: '2025-07-19',
      category: 'Food',
      status: 'Pending',
      totalExpenses: 1,
      totalAmount: '₹ 250.00',
    },
  ];

  const handleExpensePress = () => {
    setShowExpenseDetails(true);
  };

  const handleUpdateStatus = () => {
    setShowUpdateStatus(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="#2563EB" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-gray-900">Team Management</Text>
      </View>

      {/* Tab Bar */}
      <View className="flex-row bg-white mx-4 mt-4 rounded-lg p-1">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            className={`flex-1 py-3 rounded-md ${
              activeTab === tab ? 'bg-blue-50' : ''
            }`}
            onPress={() => setActiveTab(tab)}
          >
            <Text className={`text-center font-medium ${
              activeTab === tab ? 'text-blue-600' : 'text-gray-500'
            }`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView className="flex-1 px-5 pt-6">
        {activeTab === 'Team Expenses' && (
          <View>
            {expenses.map((expense) => (
              <TouchableOpacity
                key={expense.id}
                className="bg-white rounded-xl p-4 mb-4 border border-gray-100"
                onPress={handleExpensePress}
              >
                <View className="flex-row justify-between items-start mb-3">
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-gray-900 mb-1">
                      {expense.id}
                    </Text>
                    <Text className="text-sm text-gray-500">{expense.date}</Text>
                  </View>
                  <ChevronRight size={20} color="#9CA3AF" />
                </View>
                
                <View className="flex-row items-center mb-3">
                  <View className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  <Text className="text-sm text-gray-700">{expense.category}</Text>
                  <View className="ml-auto">
                    <View className="bg-orange-100 px-2 py-1 rounded-lg">
                      <Text className="text-xs font-medium text-orange-600">
                        {expense.status}
                      </Text>
                    </View>
                  </View>
                </View>
                
                <View className="flex-row justify-between">
                  <View>
                    <Text className="text-sm text-gray-500">Total Expenses</Text>
                    <Text className="text-base font-semibold text-blue-600">
                      {expense.totalExpenses}
                    </Text>
                  </View>
                  <View className="items-end">
                    <Text className="text-sm text-gray-500">Total Amount</Text>
                    <Text className="text-base font-semibold text-blue-600">
                      {expense.totalAmount}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Expense Details Modal */}
      {showExpenseDetails && (
        <View className="absolute inset-0 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl p-6 h-1/3">
            <View className="w-12 h-1 bg-gray-300 rounded-full self-center mb-6" />
            <Text className="text-xl font-semibold text-gray-900 text-center mb-6">
              Expense Details
            </Text>
            
            <TouchableOpacity
              className="bg-gray-50 rounded-xl p-4 mb-4"
              onPress={handleUpdateStatus}
            >
              <Text className="text-base font-medium text-gray-900 text-center">
                Update Status
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              className="py-4"
              onPress={() => setShowExpenseDetails(false)}
            >
              <Text className="text-base text-gray-500 text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Update Status Modal */}
      {showUpdateStatus && (
        <View className="absolute inset-0 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl p-6 h-2/3">
            <View className="w-12 h-1 bg-gray-300 rounded-full self-center mb-6" />
            <Text className="text-xl font-semibold text-gray-900 text-center mb-8">
              Update Status
            </Text>
            
            <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
              <View className="w-6 h-6 rounded-full border-2 border-gray-300 mr-4" />
              <Text className="text-base text-gray-900">Approve</Text>
            </TouchableOpacity>
            
            <View className="flex-1" />
            
            <TouchableOpacity
              className="py-4"
              onPress={() => {
                setShowUpdateStatus(false);
                setShowExpenseDetails(false);
              }}
            >
              <Text className="text-base text-gray-500 text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}