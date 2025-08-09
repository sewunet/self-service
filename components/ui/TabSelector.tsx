import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

interface Tab {
  id: string;
  title: string;
}

interface TabSelectorProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function TabSelector({ tabs, activeTab, onTabChange, className }: TabSelectorProps) {
  return (
    <View className={`flex-row bg-gray-50 rounded-lg p-1 ${className}`}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          className={`flex-1 py-3 items-center rounded-md ${
            activeTab === tab.id 
              ? 'bg-white shadow-sm' 
              : ''
          }`}
          onPress={() => onTabChange(tab.id)}
        >
          <Text className={`text-sm font-medium font-inter ${
            activeTab === tab.id 
              ? 'text-blue-600' 
              : 'text-gray-500'
          }`}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}