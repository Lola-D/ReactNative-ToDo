import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import TaskTile from './TaskTile'

const TasksList = ({ tasks }) => {
  const _renderItem = ({ item }) => (
    <TaskTile
      id={item.id}
      title={item.title}
      completed={item.completed}
    />
  )
  
  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15
  }
})

export default TasksList
