import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  header: '',
  content: '',
});

const changeDetailData = (state, action) => {
  return state.merge({
    header: action.data.get('header'),
    content: action.data.get('content')
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL_DATA:
      return changeDetailData(state, action)
    default:
      return state
  }
}