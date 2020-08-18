import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM } from './store/actionTypes'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
  }

  componentWillMount() {
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <Fragment>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder='toto'
            onChange={this.onChange}
            style={{width: '300px'}}
          />
          <Button type='primary' onClick={this.onClick}>submit</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.onDelete.bind(this, index)}>{item}</List.Item>)}
          style={{width: '300px'}}
        />
      </Fragment>
    )
  }

  onClick() {
    let action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }

  onChange(e) {
    let action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  onDelete(index) {
    let action = {
      type: DELETE_ITEM,
      index
    }
    store.dispatch(action)
  }
}

export default TodoList
