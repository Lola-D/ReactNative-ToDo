import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const days = [
  'Dimancehe',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi'
  ]

const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
]

const Header = () => {
  const date = new Date()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#841584',
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  }
});

export default Header
