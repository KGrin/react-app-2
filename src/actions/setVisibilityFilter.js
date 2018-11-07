import CONSTANTS from '../constants'

export default function setVisibilityFilter(filter) {
  return {
    type: CONSTANTS.ActionTypes.SET_VISIBILITY_FILTER,
    filter
  }
}