import { ADD_TASK, COMPLETED_TASK, DELETE_TASK } from '../actionsType'

export const tasksList = (state = [], action) => {
  switch(action.type) {
    case ADD_TASK:
      return [...state, action.payload]
    case COMPLETED_TASK:
      return state.map(task => {
        if (task.id === action.payload.id) {
          return {id: task.id, title: task.title, completed: !task.completed}
        } else {
          return task
        }
      })
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id)
    default:
      return state
  }
}
