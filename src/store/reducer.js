const defaultState = {
  inputValue: '123',
  list: [1 ,2]
}

export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}