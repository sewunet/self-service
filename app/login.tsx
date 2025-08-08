import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Globe, User, Lock, Eye, EyeOff, ExternalLink } from 'lucide-react-native';

export default function LoginScreen() {
  const [workplaceUrl, setWorkplaceUrl] = useState('https://');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('Workplace URL');

  const handleLogin = () => {
    // Navigate to main app
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
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Workplace URL' && styles.activeTab]}
              onPress={() => setActiveTab('Workplace URL')}
            >
              <Text style={[styles.tabText, activeTab === 'Workplace URL' && styles.activeTabText]}>
                Workplace URL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'ERP Code' && styles.activeTab]}
              onPress={() => setActiveTab('ERP Code')}
            >
              <Text style={[styles.tabText, activeTab === 'ERP Code' && styles.activeTabText]}>
                ERP Code
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Workplace URL Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Enter workplace url</Text>
              <View style={styles.inputWrapper}>
                <Globe size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  value={workplaceUrl}
                  onChangeText={setWorkplaceUrl}
                  placeholder="https://"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </View>

            {/* Username Input */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <User size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Username"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Lock size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity 
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  {showPassword ? (
                    <EyeOff size={20} color="#9CA3AF" />
                  ) : (
                    <Eye size={20} color="#9CA3AF" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

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
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 4,
    marginBottom: 32,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#4F46E5',
  },
  form: {
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 8,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FAFAFA',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  eyeIcon: {
    padding: 4,
  },
  loginButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
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