import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

const TaskTile = ({id, title, completed, onChangeStatus, onDeleteTask}) => {
  return (
    <TouchableOpacity onPress={() => onChangeStatus(id)}>
      <View style={styles.container} >
        <View ew style={styles.subContainer}>
          <Image
            style={styles.icon}
            source={
              completed
                ? require('../../assets/icon_check.png')
                : require('../../assets/icon_circle.png')
              }
          />
          <Text style={[styles.title, {color: completed ? "lightgrey" : "black"}]}>{title}</Text>
        </View>
        <TouchableOpacity onPress={() => onDeleteTask(id)}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon_bin.png')}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    marginLeft: 30
  },
  icon: {
    width: 30,
    height: 30
  },
});

export default TaskTile
