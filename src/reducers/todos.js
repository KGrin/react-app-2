import CONSTANTS from '../constants'

export default function todos (state = [], action) {
  switch (action.type) {
    case CONSTANTS.ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case CONSTANTS.ActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}