import React,  { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import Header from './components/Main/Header/Header';
// or any pure javascript modules available in npm

export default function App() {
  return (
    <View style={styles.container}>
  <StatusBar backgroundColor="#0098ED"/>
    <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
