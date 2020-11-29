import React, { useState } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { useSelector } from 'react-redux'

import { getTasks } from '../redux/selectors'
import TasksList from './TasksList'
import TaskForm from './TaskForm'
import CountersContainer from './CountersContainer'
import FloatingButton from './FloatingButton'

const TasksContainer = () => {
  const tasks = useSelector(getTasks)
  const [isFormOpened, setIsFormOpened] = useState(false)
  
  const toggleForm = () => {
    setIsFormOpened(!isFormOpened)
  }
  
  return (
    <View style={styles.container}>
    {
      isFormOpened && <TaskForm/>
    }
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={tasks.filter(task => task.completed).length}
      />
      {
        tasks.length > 0 &&
        <TasksList
          tasks={tasks}
          />
      }
      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: Platform.OS === 'android' ? 20 : 0,
    flex: 1,
    position: 'relative'
  }
})

export default TasksContainer
