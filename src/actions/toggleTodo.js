import CONSTANTS from '../constants'

export default function toggleTodo(id) {
  return {
    type: CONSTANTS.ActionTypes.TOGGLE_TODO,
    id
  }
}