import React, { useState } from 'react'
import { View, StyleSheet, Platform } from 'react-native'

import TasksList from './TasksList'
import TaskForm from './TaskForm'
import CountersContainer from './CountersContainer'
import FloatingButton from './FloatingButton'

const TasksContainer = () => {
  const [tasks, setTasks] = useState([])
  const [isFormOpened, setIsFormOpened] = useState(false)
  
  const onAddTask = title => {
    const newTask = {id: new Date().getTime().toString(), title: title, completed: false}
    setTasks([newTask, ...tasks])
  }
  
  const onChangeStatus = id => {
    let newTasks = []
    tasks.forEach(task => {
      if (task.id === id) {
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed
        })
      } else {
        newTasks.push(task)
      }
    })
    setTasks(newTasks)
  }
  
  const onDeleteTask = id => {
    let newTasks = []
    tasks.forEach(task => {
      if (task.id !== id) {
        newTasks.push(task)
      }
    })
    setTasks(newTasks)
  }
  
  const toggleForm = () => {
    setIsFormOpened(!isFormOpened)
  }
  
  return (
    <View style={styles.container}>
    {
      isFormOpened && <TaskForm onAddTask={onAddTask}/>
    }
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={tasks.filter(task => task.completed).length}
      />
      {
        tasks.length > 0 &&
        <TasksList
          tasks={tasks}
          onChangeStatus={onChangeStatus}
          onDeleteTask={onDeleteTask}
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
