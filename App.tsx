import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './src/pages/home';


export default function App() {
  return (
    <SafeAreaView >
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}