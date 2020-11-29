import React from 'react'
import { View, StyleSheet } from 'react-native'

import Counter from './Counter'

const CountersContainer = ({nbTasks, nbTasksCompleted}) => {
  return (
    <View style={styles.container}>
      <Counter
        title={
          nbTasks > 1
          ? 'Tâches créées'
          : 'Tâche créée'
        }
        nb={nbTasks}
      />
      <Counter
        title={
          nbTasksCompleted > 1
          ? 'Tâches complétées'
          : 'Tâche complétée'
        }
        nb={nbTasksCompleted}
      />
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
