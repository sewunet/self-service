import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Globe, User, Lock, Eye, EyeOff, ExternalLink } from 'lucide-react-native';

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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>ESS</Text>
            <Text style={styles.logoSubtext}>by Nesscale</Text>
          </View>

          {/* Welcome Text */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Let's sign you in</Text>
            <Text style={styles.welcomeSubtitle}>Enter below details to continue..</Text>
          </View>

          {/* Tab Selector */}
          <View style={styles.tabContainer}>
            <TabSelector
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </View>

          {/* Form */}
          <View style={styles.form}>
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
              secureTextEntry={!showPassword}
              rightIcon={
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff size={20} color="#9CA3AF" />
                  ) : (
                    <Eye size={20} color="#9CA3AF" />
                  )}
                </TouchableOpacity>
              }
            />
          </View>

          {/* Login Button */}
          <Button
            title="Login"
            onPress={handleLogin}
            style={styles.loginButton}
          />

          {/* Register Button */}
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register for ESS</Text>
            <ExternalLink size={16} color="#4F46E5" />
          </TouchableOpacity>

          {/* Demo Section */}
          <View style={styles.demoSection}>
            <Text style={styles.demoTitle}>Try Our Demo App</Text>
            <TouchableOpacity style={styles.demoButton} onPress={handleDemoLogin}>
              <Text style={styles.demoButtonText}>Continue as Demo User ›</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4F46E5',
    letterSpacing: 2,
  },
  logoSubtext: {
    fontSize: 16,
    color: '#4F46E5',
    marginTop: 4,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  tabContainer: {
    marginBottom: 32,
  },
  form: {
    marginBottom: 32,
  },
  loginButton: {
    marginBottom: 16,
  },
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4F46E5',
    backgroundColor: 'white',
    marginBottom: 32,
    gap: 8,
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4F46E5',
  },
  demoSection: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: 40,
  },
  demoTitle: {
    fontSize: 16,
    color: '#4F46E5',
    marginBottom: 16,
  },
  demoButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FAFAFA',
  },
  demoButtonText: {
    fontSize: 16,
    color: '#6B7280',
  },
});