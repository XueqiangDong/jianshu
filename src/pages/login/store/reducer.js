import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  loginStatus: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN_VALUE:
      return state.set('loginStatus', action.value)
    default:
      return state
  }
}