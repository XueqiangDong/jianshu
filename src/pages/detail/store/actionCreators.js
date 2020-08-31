import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeDetailData = (data) => {
  return {
    type: constants.CHANGE_DETAIL_DATA,
    data: fromJS(data),
  }
}

export const getDetailData = () => {
  return (dispatch) => {
    let onSuccess = (res) => {
      let data = res.data
      dispatch(changeDetailData(data))
    }
    let onError = (res) => {
      console.warn('no data')
    }
    axios.get('http://localhost:3001/detail')
      // axios.get('/api/list.json')
      .then(onSuccess, onError)
  }
}