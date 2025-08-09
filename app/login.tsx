import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Globe, User, Lock, ExternalLink } from 'lucide-react-native';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { TabSelector } from '@/components/ui/TabSelector';

const tabs = [
  { id: 'workplace', title: 'Workplace URL' },
  { id: 'erp', title: 'ERP Code' }
];

export default function LoginScreen() {
  const [workplaceUrl, setWorkplaceUrl] = useState('https://');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('workplace');

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  const handleDemoLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView 
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="flex-1 px-6 pt-10">
          {/* Logo */}
          <View className="items-center mb-10">
            <Text className="text-5xl font-bold text-blue-600 tracking-wider">ESS</Text>
            <Text className="text-base text-blue-600 mt-1">by Nesscale</Text>
          </View>

          {/* Welcome Text */}
          <View className="items-center mb-10">
            <Text className="text-2xl font-semibold text-gray-900 mb-2">Let's sign you in</Text>
            <Text className="text-base text-gray-400">Enter below details to continue..</Text>
          </View>

          {/* Tab Selector */}
          <TabSelector
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className="mb-8"
          />

          {/* Form */}
          <View className="mb-8">
            <Input
              label="Enter workplace url"
              icon={Globe}
              value={workplaceUrl}
              onChangeText={setWorkplaceUrl}
              placeholder="https://"
            />

            <Input
              icon={User}
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
            />

            <Input
              icon={Lock}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>

          {/* Login Button */}
          <Button
            title="Login"
            onPress={handleLogin}
            className="mb-4"
          />

          {/* Register Button */}
          <TouchableOpacity className="flex-row items-center justify-center py-4 rounded-xl border border-blue-500 bg-white mb-8">
            <Text className="text-base font-medium text-blue-500 mr-2">Register for ESS</Text>
            <ExternalLink size={16} color="#4F46E5" />
          </TouchableOpacity>

          {/* Demo Section */}
          <View className="items-center mt-auto pb-10">
            <Text className="text-base text-blue-600 mb-4">Try Our Demo App</Text>
            <TouchableOpacity className="py-4 px-6 rounded-xl border border-gray-200 bg-gray-50" onPress={handleDemoLogin}>
              <Text className="text-base text-gray-500">Continue as Demo User ›</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}