import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes'
import axios from 'axios'

export const getInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    let onSuccess = (res) => {
      let data = res.data
      let action = initListAction(data)
      dispatch(action)
    }
    let onError = (error) => {
      console.log(',,', error)
    }
    axios.get('http://localhost:3001/list')
      .then(onSuccess)
  }
}
