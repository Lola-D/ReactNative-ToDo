import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Text } from 'react-native'
import { useDispatch } from 'react-redux'

import { addTask } from '../redux/actions'

const TaskForm = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  
  const _onChangeText = value => {
    setTitle(value)
  }
  
  const _onPressBtn = () => {
    if (title.length > 0) {  
      dispatch(addTask(title))
      setTitle('')
    }
  }
  
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            value={title} 
            onChangeText={_onChangeText}
            placeholder='Nouvelle tâche'
            maxLength={25}
          />
        </View>
        <Button onPress={_onPressBtn} title='Ajouter' color='#841584' />
      </View>
      <Text style={styles.infos}>25 caractères maximum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerInput: {
    width: '75%',
    height: 40,
    borderWidth: 1,
    borderColor: '#841584',
    borderRadius: 4,
    padding: 10,
  },
  infos : {
    color: 'grey',
    fontStyle: 'italic',
    fontSize:12
  }
})

export default TaskForm