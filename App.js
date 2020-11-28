import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';

import Header from './src/components/Header'
import TasksContainer from './src/components/TasksContainer'

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Header />
      <TasksContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App
