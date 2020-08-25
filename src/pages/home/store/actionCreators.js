import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeData = (data) => {
  return {
    type: constants.CHANGE_HOME_DATA,
    data: fromJS(data)
  }
}

const moreList = (data, page) => {
  return {
    type: constants.MORE_LIST,
    data: fromJS(data),
    page
  }
}

export const loadMoreAction = (page) => {
  return (dispatch) => {
    let onSuccess = (res) => {
      let data = res.data
      dispatch(moreList(data, page + 1))
    }
    let onError = (res) => {
      console.warn('no data')
    }
    axios.get('http://localhost:3001/more')
      // axios.get('/api/list.json')
      .then(onSuccess, onError)
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})

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