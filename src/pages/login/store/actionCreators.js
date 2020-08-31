import * as constants from './constants'
import axios from 'axios'

export const changeLoginValue = (value) => {
  return {
    type: constants.CHANGE_LOGIN_VALUE,
    value
  }
}

export const login = (acc, pd) => {
  return (dispatch) => {
    let onSuccess = (res) => {
      let data = res.data.status
      dispatch(changeLoginValue(data))
    }
    let onError = (res) => {
      console.warn('no data')
    }
    axios.get('http://localhost:3001/login')
      .then(onSuccess, onError)
  }
}