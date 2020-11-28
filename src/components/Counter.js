import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Counter = ({nb, title}) => {
  return (
    <View>
      <Text style={styles.nb}>{nb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  nb: {
    fontWeight: 'bold',
    color: '#841584'
  },
  title: {
    color: 'grey'
  }
})

export default Counter
