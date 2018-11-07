import CONSTANTS from '../constants'

export default function visibilityFilter(state = CONSTANTS.VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case CONSTANTS.ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}