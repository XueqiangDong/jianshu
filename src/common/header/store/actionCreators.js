import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

const changeList = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
}

export const mouseInEvent = () => ({
  type: constants.MOUSE_IN
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})

export const mouseOut = () => ({
  type: constants.MOUSE_OUT
})

export const getList = () => {
  return (dispatch) => {
    let onSuccess = (res) => {
      let data = res.data
      dispatch(changeList(data))
    }
    let onError = (res) => {
      console.warn('no data')
    }
    axios.get('http://localhost:3001/list')
      // axios.get('/api/list.json')
      .then(onSuccess, onError)
  }
}