import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const FloatingButton = ({toggleForm, isFormOpened}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={toggleForm}>
      <Text style={styles.title}>
      {
        !isFormOpened
        ? '+'
        : '-'
      }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#841584'
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 35
  }
})

export default FloatingButton
