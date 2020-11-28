import React from 'react'
import { View, StyleSheet } from 'react-native'

import Counter from './Counter'

const CountersContainer = ({nbTasks, nbTasksCompleted}) => {
  return (
    <View style={styles.container}>
      <Counter title={'Tâches créées'} nb={nbTasks}/>
      <Counter title={'Tâches complétées'} nb={nbTasksCompleted}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
  }
})

export default CountersContainer
