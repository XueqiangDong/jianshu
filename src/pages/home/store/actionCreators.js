import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeData = (data) => {
  return {
    type: constants.CHANGE_HOME_DATA,
    data: fromJS(data)
  }
}

export const getHomeData = () => {
  return (dispatch) => {
    let onSuccess = (res) => {
      let data = res.data
      dispatch(changeHomeData(data))
    }
    let onError = (res) => {
      console.warn('no data')
    }
    axios.get('http://localhost:3001/home')
      // axios.get('/api/list.json')
      .then(onSuccess, onError)
  }
}