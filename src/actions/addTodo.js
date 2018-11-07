import CONSTANTS from '../constants'

let nextTodoId = 0
export default function addTodo(text) {
  return {
    type: CONSTANTS.ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text
  }
}