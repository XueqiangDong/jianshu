import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM } from './actionTypes'

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
